import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import vk from '../../images/vk.svg';
import instagram from '../../images/instagram.svg';

const styles = {
  footer: {
    backgroundColor: '#444',
    padding: '1% 10% 1% 10%',
  },
  p: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#a3a3a3',
    borderBottom: '1px solid',
    paddingBottom: '45px'
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
  },
  soc: {
    float: 'left',
    paddingLeft: '10px',
    top: '18px',
    position: 'relative'
  },
  socMain: {
    float: 'left',
  },
}

class Footer extends Component {
  render() {
    return(
      <Grid container gutter={0} style={styles.footer}>
        <Grid item sm={12}>
          <div style={styles.p}>
            <div style={styles.socMain}>
              <p>Мы в соцсетях:</p>
            </div>
            <div style={styles.soc}>
              <a href='https://vk.com/bonustmn' target='_blank' rel="noopener noreferrer">
                <img src={vk} alt={vk} />
              </a>
            </div>
            <div style={styles.soc}>
              <a href='https://www.instagram.com/bonusget/' target='_blank' rel="noopener noreferrer">
                <img src={instagram} alt={instagram} />
              </a>
            </div>
          </div>
        </Grid>
        <Grid item sm={12}>
          <p style={styles.pc}>&#169;&nbsp; 2017, &nbsp; Бонусы &nbsp;&nbsp; <span style={styles.span}>18+</span></p>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
