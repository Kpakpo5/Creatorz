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
import Inscription from 'src/components/Inscription';
import InscriptionCreator from 'src/containers/InscriptionCreator';
import InscriptionUser from 'src/containers/InscriptionUser';
import CreatorsPerCategory from 'src/containers/CreatorsPerCategory';
import TestUserApi from 'src/containers/TestUserApi';

import './style.scss';

const App = () => (
  <div className="app pushable">
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
      <Route path="/inscription" exact>
        <Inscription />
      </Route>
      <Route path="/inscription/creator" exact>
        <InscriptionCreator />
      </Route>
      <Route path="/inscription/user" exact>
        <InscriptionUser />
      </Route>
      <Route path="/test/api" exact>
        <TestUserApi />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
