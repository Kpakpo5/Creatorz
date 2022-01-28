import React from 'react';
import logo from 'src/assets/logo-creatorz.png';

import NavHeader from 'src/components/NavHeader';

import './style.scss';

const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" className="header-logo" />
    <div className="header-title">
      <h1>CreatOrz'</h1>
      <p>Vos créateurs à portée de main</p>
      <NavHeader />
    </div>
    <div className="header-button">
      <button type="button">Connexion</button>
      <button type="button">Inscription</button>
    </div>
  </div>
);

export default Header;
