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
  const handleChangeAvatar = (evt) => {
    console.log(evt.target.files[0]);
    changeField(evt.target.files[0], 'avatar');
  };

  return (
    <Page>
      <h1>Inscription en tant qu'utilisateur</h1>
      <p>Cette inscription vous permettra, entre autres, d'émettre des commentaires sur le site.</p>
      <section className="inscription">
        <form className="inscription-form" onSubmit={handleSubmit}>
          <Field
            name="pseudo"
            placeholder="pseudo"
            onChange={changeField}
            value={pseudo}
            required="required"
          />
          <Field
            name="email"
            type="email"
            placeholder="Adresse mail"
            onChange={changeField}
            value={email}
            required="required"
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
            required="required"
          />
          <label htmlFor="avatar">Choisissez votre avatar
            <input id="avatar" type="file" accept=".png, .jpg, .jpeg" onChange={handleChangeAvatar} />
          </label>
          <button
            type="submit"
            className="inscription-button"
          >
            Valider l'inscription
          </button>
        </form>
      </section>
      <Link to="/inscription">
        <button
          type="button"
          className="back-button"
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
