import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Field from 'src/components/LoginForm/Field';
import '../style.scss';

const UserForm = ({
  pseudo,
  email,
  password,
  changeField,
  handleInscriptionUser,
  logged,
  handleUpdateUser,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (logged) {
      handleUpdateUser();
    }
    else {
      handleInscriptionUser();
    }
  };
  const handleChangeAvatar = (evt) => {
    console.log(evt.target.files[0]);
    changeField(evt.target.files[0], 'avatar');
  };

  return (
    <section className="inscription">
      <form className="inscription-form" onSubmit={handleSubmit} encType="multipart/form-data" method="post">
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
          onClick={() => <Redirect to="/profile" />}
        >
          Valider
        </button>
      </form>
    </section>
  );
};

UserForm.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleInscriptionUser: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  handleUpdateUser: PropTypes.func.isRequired,
};

export default UserForm;
