import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';

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
import Loading from './Loading';

import './style.scss';

const App = ({ loading }) => {
  const location = useLocation();

  useEffect(() => {
    // je reviens en haut
    window.scroll(0, 0);
  }, [location]);

  if (loading) {
    return <Loading />;
  }
  return (
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
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
