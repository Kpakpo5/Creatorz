import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const NavHeader = ({ toggleSidebar }) => (
  <nav className="menu">
    <NavLink
      to="/"
      exact
      className="menu-link"
      activeClassName="menu-link--active"
      onClick={toggleSidebar}
    >
      Accueil
    </NavLink>
    <NavLink
      to="/categories"
      exact
      className="menu-link"
      activeClassName="menu-link--active"
      onClick={toggleSidebar}
    >
      Catégories
    </NavLink>
    <NavLink
      to="/creators"
      exact
      className="menu-link"
      activeClassName="menu-link--active"
      onClick={toggleSidebar}
    >
      Créateurs
    </NavLink>
  </nav>
);

NavHeader.propTypes = {
  toggleSidebar: PropTypes.func,
};

NavHeader.defaultProps = {
  toggleSidebar: null,
};

export default NavHeader;
