import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';

import Error from 'src/components/Error';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Creators from 'src/containers/Creators';
import Categories from 'src/containers/Categories';
import Footer from 'src/components/Footer';
import Creator from 'src/containers/Creator';
import LoginForm from 'src/containers/LoginForm';
import Inscription from 'src/components/Inscription';
import InscriptionCreator from 'src/components/Inscription/InscriptionCreator';
import InscriptionUser from 'src/components/Inscription/InscriptionUser';
import CreatorsPerCategory from 'src/containers/CreatorsPerCategory';
import Profile from 'src/containers/Profile';
import Update from 'src/containers/Update';
import WhoAreWe from 'src/components/WhoAreWe';
import Loading from './Loading';

import './style.scss';

const App = ({
  loadingCreators,
  fetchCreators,
  loadingCategories,
  fetchCategories,
  isLogged,
}) => {
  useEffect(() => {
    fetchCreators();
    fetchCategories();
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  const location = useLocation();

  useEffect(() => {
    // je reviens en haut
    window.scroll(0, 0);
  }, [location]);

  if (loadingCreators && loadingCategories) {
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
        {isLogged && (
          <Route path="/profile" exact>
            <Profile />
          </Route>
        )}
        {isLogged && (
          <Route path="/profil/mise-a-jour" exact>
            <Update />
          </Route>
        )}
        <Route path="/qui-sommes-nous" exact>
          <WhoAreWe />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <button type="button" className="button-go-back" onClick={handleClick}>Retour</button>
      <Footer />
    </div>
  );
};

App.propTypes = {
  loadingCreators: PropTypes.bool,
  fetchCreators: PropTypes.func.isRequired,
  loadingCategories: PropTypes.bool,
  fetchCategories: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  loadingCreators: true,
  loadingCategories: true,
  isLogged: false,
};

export default App;
