import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import { OffersCat } from './OffersCat';
import OffersRoute from './OffersRoute';
import './Offers.css';

import vk from '../../images/vk.svg';
import instagram from '../../images/instagram.svg';

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
    paddingLeft: '35%',
    marginBottom: '6%',
    borderTop: '1px solid #e7e7e7'
  },
}));

function Offers(props) {
  const classes = props.classes;

  return (
    <div>
      <div className='bodySmall'>
        <h2 className='text'>Для просмотра предложений со смартфона скачайте мобильное приложение!</h2>
        <a href='https://itunes.apple.com/ru/app/%D0%B1%D0%BE%D0%BD%D1%83%D1%81%D1%8B/id1225171527?mt=8'>
          <img className='appstore' src='https://qrolik.com/static/v2/img/app-link/app-app-store.svg' alt='AppStore'/>
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.bonusget.bonus&hl=ru&source=apkAndroid.ru'>
          <img className='googleplay' src='https://qrolik.com/static/v2/img/app-link/app-google-play.svg' alt='GooglePlay'/>
        </a>
      </div>
      <div className='bodyOffers'>
        <div className={classes.root}>
          <Grid container gutter={0}>
            <Grid className={classes.category} item sm={3}>
              <OffersCat />
                <div className={classes.img_box}>
                  <a href='https://vk.com/bonustmn' target='_blank' rel="noopener noreferrer">
                    <img src={vk} alt={vk} className={classes.img} />
                  </a>
                  <a href='https://www.instagram.com/bonusget/' target='_blank'rel="noopener noreferrer">
                    <img src={instagram} alt={instagram} className={classes.img} />
                  </a>
                </div>
            </Grid>
            <Grid item sm={3} />
            <Grid className={classes.blocks} item sm={9}>
              <OffersRoute />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

Offers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Offers);
