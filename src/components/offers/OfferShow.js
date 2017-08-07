import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';
import { Api } from '../Api.json';
import './OfferShow.css';

const styles = {
  card: {
    display: 'flex',
    boxShadow: '0 5px 25px 0 rgba(102,102,153,.15)',
    margin: '1px 1% 2% 1px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '650px'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingBottom: 8,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  blocks: {
    marginTop: '80px'
  },
  img: {
    width: '100%',
    boxShadow: '0 5px 25px 0 rgba(102,102,153,.15)'
  },
  container: {
    width: '100%'
  },
  cashback: {
    textAlign: 'center',
    height: '100%',
    boxShadow: '0 5px 25px 0 rgba(102,102,153,.15)',
    position: 'relative',
  },
  perc: {
    borderBottom: '1px solid #dbdbdb',
    paddingBottom: '6%'
  },
  bold: {
    fontWeight: 400,
    marginTop: 0
  },
  desc: {
    whiteSpace: 'pre-line',
  },
  addresses: {
    marginTop: 17
  },
  load: {
    paddingTop: '30%',
    paddingLeft: '45%'
  },
};

class OfferShow extends Component{
  state = {reviews: [], contacts: []}

  componentDidMount(){
    fetch(`${Api}/proxy/api/v1/offers/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        user => {
          this.setState({
            user: user
          });
        }
      );

    fetch(`${Api}/proxy/api/v1/reviews/?offer_id=${this.props.match.params.id}`)
     .then(res => res.json())
     .then(results => this.setState({ reviews: results.data}));

   fetch(`${Api}/proxy/api/v1/offers/?per_page=500`)
    .then(res => res.json())
    .then(results => this.setState({ contacts: results.data}));
  }

  render() {
      // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
      if (!this.state.user) {
          return (
            <div style={styles.load}>
              <CircularProgress size={60}/>
            </div>);
      }

      // If we get to this part of `render`, then the user is loaded
      const user = this.state.user.data;

      // Look in index.css for the styles that make this look like it does
      return (
          <div style={styles.blocks}>
            <h2>{user.name}</h2>
            <Grid container style={styles.container}>
              <Grid item sm={8}>
                <img src={`${Api}/uploads`+user.images[0]} style={styles.img} alt={user.name}/>
              </Grid>
              <Grid item sm={4}>
                <Card style={styles.cashback}>
                  <h2 style={styles.perc}>Ваша выгода</h2>
                  <div className='romb'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 188.45" fill="#00b0ff">
                      <path d="M70.1,9.9c9.6-5.5,25.2-5.5,34.7,0l52.8,30.2C167.2,45.5,175,59,175,70v60c0,11-7.8,24.5-17.4,29.9l-52.8,30.2c-9.6,5.5-25.2,5.5-34.7,0L17.3,159.9C7.8,154.5,0,141,0,130V70C0,59,7.8,45.5,17.4,40.1Z" transform="translate(0 -5.77)"></path>
                    </svg>
                  </div>
                  <div className='percent'>
                    <h1 className='percentName'>{user.percent} %</h1>
                  </div>
                </Card>
              </Grid>
              <Grid item sm={8}>
                <div id="vk_like"></div>
                <h3 style={styles.bold}>Информация</h3>
                <h4 style={styles.desc}>{user.desc}</h4>
              </Grid>
              <Grid item sm={4}>
                <Grid item sm={12}>
                  <Card style={styles.card}>
                    <CardContent>
                      <h3 style={styles.bold}>Контакты</h3>
                      {this.state.contacts.map(contact => {
                        if (this.props.match.params.id == contact.id)
                        return(
                          <div>
                            {contact.addresses.map(address => {
                              return(
                                <div>{address.phones.map(phone => {
                                    return(
                                      <div>{phone.phone}</div>
                                    )
                                  })}</div>
                              )
                            })}
                          </div>
                        )
                      })}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} style={styles.addresses}>
                  <Card style={styles.card}>
                    <CardContent>
                      <h3 style={styles.bold}>Адреса</h3>
                        {this.state.contacts.map(contact => {
                          if (this.props.match.params.id == contact.id)
                          return(
                            <div>
                              {contact.addresses.map(address => {
                                return(
                                  <div>ул.{address.street} {address.house}</div>
                                )
                              })}
                            </div>
                          )
                        })}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} style={styles.addresses}>
                      <h3 style={styles.bold}>Отзывы</h3>
                      <div className='reviews'>
                      {this.state.reviews.map(review => {
                        return(
                          <Card style={styles.card} key={review.id}>
                            <CardContent className='cardContent'>
                            <div className='reviewDivider'>
                              <div className='reviewName'>{review.user.name}</div>
                              <div className='reviewRating'>{review.rating} из 10</div>
                            </div>
                            <div className='reviewMessage'>{review.message}</div>
                            </CardContent>
                          </Card>
                        )
                      })}
                      </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
      );
  }
}

export default OfferShow;
