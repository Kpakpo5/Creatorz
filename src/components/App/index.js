import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from 'src/components/Error';
import Header from 'src/components/Header';
import Home from 'src/containers/Home';
import Creators from 'src/components/Creators';
import Categories from 'src/components/Categories';
import Footer from 'src/components/Footer';

import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/categories" exact>
        <Categories />
      </Route>
      <Route path="/creators" exact>
        <Creators />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
