import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const NavHeader = () => (
  <nav className="menu">
    <NavLink
      to="/"
      exact
      className="menu-link"
      activeClassName="menu-link--active"
    >
      Accueil
    </NavLink>
    <NavLink
      to="/categories"
      exact
      className="menu-link"
      activeClassName="menu-link--active"
    >
      Catégories
    </NavLink>
    <NavLink
      to="/creators"
      exact
      className="menu-link"
      activeClassName="menu-link--active"
    >
      Créateurs
    </NavLink>
    <NavLink
      to="/test/api"
      exact
      className="menu-link"
      activeClassName="menu-link--active"
    >
      Tu veux tester mon API ? héhé
    </NavLink>
  </nav>
);

export default NavHeader;
