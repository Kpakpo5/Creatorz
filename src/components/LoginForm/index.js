import React from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import { Message } from 'semantic-ui-react';
import Field from './Field';

import './style.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  logged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <Page>
      {logged && (
        <Message positive>
          <p>Vous êtes maintenant connecté</p>
        </Message>
      )}
      <div className="login-form">
        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
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
            className="login-form-button"
          >
            OK
          </button>
        </form>
      </div>
    </Page>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default LoginForm;
