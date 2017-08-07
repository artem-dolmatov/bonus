import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import { Api } from '../Api.json';
import './AllOffers.css';

const styles = {
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
  },
  company: {
    position: 'absolute',
    zIndex: '100',
    color: 'white',
    maxWidth: '490px',
    width: '100%',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))'
  },
  companyName: {
    marginTop: '2%',
    marginBottom: '3%',
    marginLeft: '2%',
    fontWeight: '400',
    fontSize: '18px'
  }
}

class AllOffers extends Component {
  constructor(props){
    super(props);
    this.state = {
      offers: [],
      companies: [],
      loading: true
    };
  }

   componentDidMount(){
     fetch(`${Api}/proxy/api/v1/offers?per_page=500`)
      .then(res => res.json())
      .then(results => this.setState({ offers: results.data, loading: false}), 1500);

      fetch(`${Api}/proxy/api/v1/companies?per_page=500`)
       .then(res => res.json())
       .then(results => this.setState({ companies: results.data}));
   }

   render(){
     const { loading } = this.state;
     
     if (loading) {
         return (
           <div style={styles.load}>
             <CircularProgress size={60}/>
           </div>);
     }
     return(
       <div style={s.block}>
        <h2>Все предложения</h2>
        {this.state.offers.map(offer =>  {
          return (
            <div key={offer.id} style={styles.block}>
              <Link to={`/offers/id/${offer.id}`} style={s.link}>
                <Card className='card'>
                  {this.state.companies.map(company => {
                    if (offer.company.id === company.id) {
                      return (
                        <div key={company.id} style={s.company}>
                          <h3 style={s.companyName}>{company.name}</h3>
                        </div>
                      )
                    }
                  })}
                  <CardMedia>
                    <img src={`${Api}/uploads`+offer.images[0]} alt={offer.name} style={styles.img}/>
                    <span style={styles.span}></span>
                    <div style={styles.percent}>{offer.percent} %</div>
                  </CardMedia>
                  <CardContent className='cardContent'>
                    <Typography>
                      <h3 style={s.name}>{offer.name}</h3>
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </div>
          )
        })}
       </div>
     );
   }
}

export default (AllOffers);
