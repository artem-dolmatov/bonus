import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import OffersFilter from './OffersFilter';
import OfferShow from './OfferShow';
import AllOffers from './AllOffers';

class OffersRoute extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/offers/category/:id' component={OffersFilter} />
          <Route path='/offers/id/:id' component={OfferShow} />
          <Route path='/offers/all' component={AllOffers} />
        </Switch>
        <div>
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default OffersRoute;
