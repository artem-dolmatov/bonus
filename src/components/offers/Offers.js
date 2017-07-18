import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import OffersCat from './OffersCat';
import OffersRoute from './OffersRoute';

import vk from '../../images/vk.svg';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook-box.svg';
import odnoklassniki from '../../images/odnoklassniki.svg';

const styleSheet = createStyleSheet('Offers', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  block: {
    display: 'inline-block',
  },
  blocks: {
  },
  category: {
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    overflowY: 'auto',
    height: '90vh',
    marginTop: '65px',
    position: 'fixed',
    width: '24%'
  },
  img: {
    paddingRight: '20%'
  },
  img_box: {
    paddingTop: '15px',
    paddingLeft: '8%',
    marginBottom: '6%'
  },
}));

function Offers(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container gutter={0}>
        <Grid className={classes.category} item sm={3}>
          <OffersCat />
            <div className={classes.img_box}>
              <img src={vk} alt={vk} className={classes.img} />
              <img src={facebook} alt={facebook} className={classes.img} />
              <a href='https://www.instagram.com/bonusget/'>
                <img src={instagram} alt={instagram} className={classes.img} />
              </a>
              <img src={odnoklassniki} alt={odnoklassniki} />
            </div>
        </Grid>
        <Grid item sm={3} />
        <Grid className={classes.blocks} item sm={9}>
          <OffersRoute />
        </Grid>
      </Grid>
    </div>
  );
}

Offers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Offers);
