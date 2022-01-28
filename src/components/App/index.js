import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from 'src/components/Error';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Creators from 'src/containers/Creators';
import Categories from 'src/containers/Categories';
import Footer from 'src/components/Footer';
import Creator from 'src/containers/Creator';
import LoginForm from 'src/containers/LoginForm';
import CreatorsPerCategory from 'src/containers/CreatorsPerCategory';

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
      <Route path="/categorie/:slug" exact>
        <CreatorsPerCategory />
      </Route>
      <Route path="/creator/:slug" exact>
        <Creator />
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
