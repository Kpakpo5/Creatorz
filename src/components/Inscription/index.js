import React from 'react';
import Page from 'src/components/Page';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './style.scss';

const Inscription = () => (
  <Page>
    <div className="inscriptions">
      <h2>S'INSCRIRE</h2>
      <Link to="/inscription/creator">
        <Button className="inscriptions-button">En tant que créateur</Button>
      </Link>
      <Link to="/inscription/user">
        <Button className="inscriptions-button">En tant qu'utilisateur</Button>
      </Link>
    </div>
  </Page>
);

export default Inscription;
