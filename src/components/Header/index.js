import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from 'src/assets/logo-creatorz.png';
import {
  Icon,
  Menu,
  Sidebar,
  Grid,
  Button,
} from 'semantic-ui-react';

import NavHeader from 'src/components/NavHeader';

import './style.scss';

const Header = ({
  isLogged,
  handleLogout,
  toggleSidebar,
  isSidebarOpen,
}) => {
  let medium = false;
  if (window.innerWidth < 800) {
    medium = true;
  }
  if (!medium) {
    return (
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
  }
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header-logo" />
      <div className="header-title">
        <h1>CreatOrz'</h1>
        <p>Vos créateurs à portée de main</p>
      </div>
      <Button icon onClick={toggleSidebar}>
        <Icon name="bars" />
      </Button>
      <Grid columns={1}>
        <Grid.Column>
          {!isLogged && (
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              onHide={toggleSidebar}
              inverted
              vertical
              visible={isSidebarOpen}
              width="thin"
              direction="right"
            >
              <NavHeader />
              <div className="header-button">
                <Link to="/login">
                  <button type="button">Connexion</button>
                </Link>
                <Link to="/inscription">
                  <button type="button">Inscription</button>
                </Link>
              </div>
            </Sidebar>
          )}
          {isLogged && (
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={toggleSidebar}
              vertical
              visible={isSidebarOpen}
              width="thin"
              direction="right"
            >
              <NavHeader />
              <div className="header-button">
                <button type="button" onClick={handleLogout}>Déconnexion</button>
              </div>
            </Sidebar>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Header;
