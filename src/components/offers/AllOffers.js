import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import { Api } from '../Api.json';

const styles = {
  card: {
    maxWidth: 490,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    boxShadow: '0 5px 25px 0 rgba(102,102,153,.15)'
  },
  img: {
    width: '100%',
    maxHeight: 275
  },
  block: {
    float: 'left',
    heigth: '380px'
  },
  percent: {
    position: 'absolute',
    zIndex: 100,
    left: '80%',
    top: 0,
    heigth: 30,
    lineHeight: 3,
    padding: '0 9px 1px 9px',
    color: '#fff',
    backgroundColor: '#2196f3',
    borderRadius: '0px 0px 25px 25px'
  },
  span: {
    position: 'absolute',
    zIndex: 99,
    left: 0,
    right: 0,
    top: 0,
    bottom: 3,
    backgroundColor: '#212A3E',
    opacity: .2
  },
  load: {
    paddingTop: '30%',
    paddingLeft: '45%'
  },
};

const s = {
  block: {
    marginTop: '80px'
  },
  load: {
    padding: '50%'
  },
  name: {
    color: 'black',
  },
  link: {
    textDecoration: 'none'
  }
}

let Offer = function(props) {
  return (
    <div style={styles.block}>
      <Link to={`/offers/id/${props.id}`} style={s.link}>
        <Card style={styles.card}>
          <CardMedia>
            <img src={props.images} alt={props.name} style={styles.img}/>
            <span style={styles.span}></span>
            <div style={styles.percent}>{props.percent} %</div>
          </CardMedia>
          <CardContent>
            <Typography>
              <h3 style={s.name}>{props.name}</h3>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

class AllOffers extends Component {
  constructor(){
    super();
    this.state = {};
  }

   componentDidMount(){
     fetch(`${Api}/proxy/api/v1/offers`)
      .then(res => res.json())
      .then(results => this.setState({ offers: results.data}));
   }

   render(){
     if (!this.state.offers) {
         return (
           <div style={styles.load}>
             <CircularProgress size={60}/>
           </div>);
     }
     return(
       <div style={s.block}>
        <h2>Все предложения</h2>
        {this.state.offers.map(offer =>  {
          return <Offer
            id={offer.id}
            images={`${Api}/uploads`+offer.images[0]}
            name={offer.name}
            percent={offer.percent}
            key={offer.id}
            />
        })}
       </div>
     );
   }
}

export default (AllOffers);
