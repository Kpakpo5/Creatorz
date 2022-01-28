import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/LoginForm/Field';
import Page from 'src/components/Page';
import './style.scss';
import { Link } from 'react-router-dom';

const InscriptionUser = ({
  pseudo,
  email,
  password,
  changeField,
  handleInscriptionUser,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleInscriptionUser();
  };

  return (
    <Page>
      <h1>Inscription en tant qu'utilisteur'</h1>
      <p>Informations sur l'inscription</p>
      <section className="inscription-user">
        <form className="inscription-user-form" onSubmit={handleSubmit}>
          <Field
            name="pseudo"
            placeholder="pseudo"
            onChange={changeField}
            value={pseudo}
          />
          <Field
            name="email"
            type="email"
            placeholder="Adresse mail"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="inscription-user-button"
          >
            Envoyer
          </button>
        </form>
      </section>
      <Link to="/inscription">
        <button
          type="button"
          className="inscription-user-button"
        >
          Retour
        </button>
      </Link>
    </Page>
  );
};

InscriptionUser.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleInscriptionUser: PropTypes.func.isRequired,
};

export default InscriptionUser;
