import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ListIcon from 'material-ui-icons/List';
import GpsFixed from 'material-ui-icons/GpsFixed';
import { Api } from '../Api.json';

const s = {
  img: {
    width: '100%'
  },
  avatar: {
    backgroundColor: 'white'
  },
  root: {
    width: '100%',
    maxWidth: '360px',
    paddingTop: 0,
    paddingBottom: 0,
  },
  city: {
    paddingBottom: '10px'
  },
  padding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  link: {
    textDecoration: 'none'
  },
  scroll: {
    marginTop: '15px'
  },
  load: {
    padding: '30%'
  },
  text: {
    color: 'black',
    padding: '0 16px',
    fontSize: '14px',
    fontWeight: 400,
  },
  listItem:{
    paddingTop: 0,
    paddingBottom: 0,
  }
}

let OfferCategories = function(props) {
  return (
    <List style={s.padding}>
        <Link style={s.link} to={`/offers/category/${props.id}`}>
          <ListItem style={s.listItem} button>
            <img src={props.logo} alt='logo'/>
            <p style={s.text}>{props.name}</p>
          </ListItem>
        </Link>
    </List>
  )
}

class OffersCat extends Component {
  state = {offers: []}

   componentDidMount(){
     fetch(`${Api}/proxy/api/v1/offer_categories`)
      .then(res => res.json())
      .then(results => this.setState({ offers: results.data}));
   }

   render(){
     return(
       <div style={s.scroll}>
        <List style={s.city}>
          <ListItem disabled>
            <GpsFixed />
            <ListItemText secondary='Тюмень'/>
          </ListItem>
        </List>
          <Divider light />
        <List style={s.root}>
            <Link style={s.link} to='/offers/all'>
              <ListItem button>
                <ListIcon/>
                  <p style={s.text}>Все предложения</p>
              </ListItem>
            </Link>
        </List>
        {this.state.offers.slice(1).map(offer =>  {
          return(
              <OfferCategories
                id={offer.id}
                logo={`${Api}/uploads`+offer.logo}
                name={offer.name}
                key={offer.id}
              />
          );
        })}
       </div>
     );
   }
}

export default (OffersCat);
