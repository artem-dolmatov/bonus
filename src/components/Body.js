import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import Offers from './offers/Offers';

class Body extends Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/'component={Main} />
          <Route path='/offers' component={Offers} />
        </Switch>
        <div>
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default Body;
