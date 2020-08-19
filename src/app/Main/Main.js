import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Imported Components
import ShoppingCart from './../../components/ShoppingCart';
import NoMatch from './../../components/NoMatch';
import Home from './../../components/Home';

const Main = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shopping-cart' component={ShoppingCart}/>
        <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  </main>
);

export default Main;