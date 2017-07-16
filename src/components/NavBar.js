import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles, createStyleSheet } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Logo from '../images/Logo-min.png';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    margin: 0,
    width: '100%',
    zIndex: 0
  },
  flex: {
    flex: 1,
  },
  app: {
    backgroundColor: '#00b0ff',
    position: 'fixed',
    zIndex: '9999',
    margin: 0,
    },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  logo: {
    width: '75%',
    paddingRight: '25%'
  }
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <IconButton>
            <img className={classes.logo} src={Logo} alt=''/>
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            <NavLink className={classes.link} to='/'>Бонусы</NavLink>
          </Typography>
          <NavLink className={classes.link} to='/offers/all'>
            <Button color="contrast">Предложения</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);
