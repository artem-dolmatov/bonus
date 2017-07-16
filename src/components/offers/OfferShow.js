import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';

const styles = {
  card: {
    display: 'flex',
    boxShadow: '0 5px 25px 0 rgba(102,102,153,.15)'
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
  load: {
    padding: '30%'
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
    boxShadow: '0 5px 25px 0 rgba(102,102,153,.15)'
  },
  perc: {
    borderBottom: '1px solid #dbdbdb',
    paddingBottom: '6%'
  },
  percent: {
    marginTop: '35%',
    fontSize: '400%'
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
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    fetch(`http://localhost:3001/proxy/api/v1/offers/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        user => {
          this.setState({
            user: user
          });
        }
      );
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
                <img src={'http://localhost:3001/uploads'+user.images[0]} style={styles.img} alt={user.name}/>
              </Grid>
              <Grid item sm={4}>
                <Card style={styles.cashback}>
                    <h2 style={styles.perc}>Ваша выгода</h2>
                    <h1 style={styles.percent}>{user.percent} %</h1>
                </Card>
              </Grid>
              <Grid item sm={8}>
                <h3 style={styles.bold}>Информация</h3>
                <h4 style={styles.desc}>{user.desc}</h4>
              </Grid>
              <Grid item sm={4}>
                <Grid item sm={12}>
                  <Card style={styles.card}>
                    <CardContent>
                      <h3 style={styles.bold}>Контакты</h3>
                      <h4>тел.: <a href={'tel:'+user.addresses[0].phones[0].phone}>{user.addresses[0].phones[0].phone}</a></h4>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} style={styles.addresses}>
                  <Card style={styles.card}>
                    <CardContent>
                      <h3 style={styles.bold}>Адреса</h3>
                      <h4>ул. {user.addresses[0].street}, {user.addresses[0].house}</h4>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </div>
      );
  }
}

export default OfferShow;
