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

export class OffersCat extends Component {
  state = {offers: [], counts: []}

   componentDidMount(){
     fetch(`${Api}/proxy/api/v1/offer_categories?per_page=500`)
      .then(res => res.json())
      .then(results => this.setState({ offers: results.data}));

    fetch(`${Api}/proxy/api/v1/offers?per_page=100`)
      .then(result => result.json())
      .then(results => this.setState({ counts: results.data}));
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
            <List key={offer.id} style={s.padding}>
                <Link style={s.link} to={`/offers/category/${offer.id}`}>
                  <ListItem style={s.listItem} button>
                    <img src={`${Api}/uploads`+offer.logo} alt='logo'/>
                    <p style={s.text}>{offer.name}</p>
                    {this.state.counts.map(count => {
                      if ( offer.id === count.offer_category_id) {
                        return <div key={count.id}/>
                      }
                    })}
                  </ListItem>
                </Link>
            </List>
          );
        })}
       </div>
     );
   }
}
