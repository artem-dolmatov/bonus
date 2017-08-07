import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
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
  blocks: {
    marginTop: '80px'
  },
  name: {
    color: 'black',
  },
  link: {
    textDecoration: 'none'
  },
  load: {
    paddingTop: '30%',
    paddingLeft: '45%'
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
};

class SimpleMediaCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      offers: [],
      companies: [],
      categories: [],
      loading: true
    }
  }

   componentDidMount(){
     fetch(`${Api}/proxy/api/v1/offers?per_page=500`)
      .then(res => res.json())
      .then(results => this.setState({ offers: results.data, loading: false }), 1500);

      fetch(`${Api}/proxy/api/v1/companies?per_page=500`)
       .then(res => res.json())
       .then(results => this.setState({ companies: results.data}));

     fetch(`${Api}/proxy/api/v1/offer_categories?per_page=50`)
      .then(res => res.json())
      .then(results => this.setState({ categories: results.data}));
   }

   render(){
     const { loading } = this.state;

     if (loading) {
         return (
           <div style={styles.load}>
             <CircularProgress size={60}/>
           </div>);
     }
     let backId = this.props.match.params.id
     let idString = Number(backId)

     return(
       <div style={styles.blocks}>
        {this.state.categories.map(category => {
          if (idString === category.id) {
            return (
              <div key={category.id}><h2>Категория "{category.name}"</h2></div>
            )
          }
        })}
        {this.state.offers.map(offer =>  {
          if ( idString === offer.offer_category_id) {
            return (
              <div key={offer.id} style={styles.block}>
                <Link to={`/offers/id/${offer.id}`} style={styles.link}>
                  <Card style={styles.card}>
                    {this.state.companies.map(company => {
                      if (offer.company.id === company.id) {
                        return (
                          <div key={company.id} style={styles.company}>
                            <h3 style={styles.companyName}>{company.name}</h3>
                          </div>
                        )
                      }
                    })}
                    <CardMedia>
                      <img src={`${Api}/uploads`+offer.images[0]} alt={offer.name} style={styles.img}/>
                      <span style={styles.span}></span>
                      <div style={styles.percent}>{offer.percent} %</div>
                    </CardMedia>
                    <CardContent>
                      <Typography>
                        <h3 style={styles.name}>{offer.name}</h3>
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            )
          }
        })}
       </div>
     );
   }
}

export default (SimpleMediaCard);
