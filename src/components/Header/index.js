import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from 'src/assets/logo-creatorz.png';

import NavHeader from 'src/components/NavHeader';

import './style.scss';

const Header = ({ isLogged, handleLogout }) => (
  <div className="header">
    <img src={logo} alt="logo" className="header-logo" />
    <div className="header-title">
      <h1>CreatOrz'</h1>
      <p>Vos créateurs à portée de main</p>
      <NavHeader />
    </div>
    {!isLogged && (
      <div className="header-button">
        <Link to="/login">
          <button type="button">Connexion</button>
        </Link>
        <Link to="/inscription">
          <button type="button">Inscription</button>
        </Link>
      </div>
    )}
    {isLogged && (
      <div className="header-button">
        <button type="button" onClick={handleLogout}>Déconnexion</button>
      </div>
    )}
  </div>
);

Header.propTypes = {
  isLogged: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Header.defaultProps = {
  isLogged: false,
};

export default Header;
