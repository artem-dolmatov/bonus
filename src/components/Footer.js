import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

const styles = {
  soc: {

  },
  footer: {
    backgroundColor: '#444',
    padding: '1% 10% 1% 10%',
  },
  p: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#a3a3a3',
    borderBottom: '1px solid'
  },
  pc: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#a3a3a3',
  },
  span: {
    border: '1px solid',
    borderRadius: '20%',
    padding: '5px',
  }
}

class Footer extends Component {
  render() {
    return(
      <Grid container gutter={0} style={styles.footer}>
        <Grid item sm={12} style={styles.soc}>
          <p style={styles.p}>Мы в соцсетях:</p>
        </Grid>
        <Grid item sm={12}>
          <p style={styles.pc}>&#169;&nbsp; 2017, &nbsp; Бонусы &nbsp;&nbsp; <span style={styles.span}>18+</span></p>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
