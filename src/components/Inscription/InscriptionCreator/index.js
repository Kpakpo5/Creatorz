import React from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import Field from 'src/components/LoginForm/Field';
import { Link } from 'react-router-dom';

import './style.scss';

const InscriptionCreator = ({
  firstName,
  lastName,
  pseudo,
  email,
  password,
  phone,
  brand,
  facebook,
  twitter,
  instagram,
  pinterest,
  linkedin,
  website,
  category,
  categories,
  description,
  changeField,
  handleInscription,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleInscription();
  };
  const handleChangeSelect = (evt) => {
    changeField(evt.target.value, 'category');
  };
  const handleChangeTextarea = (evt) => {
    changeField(evt.target.value, 'description');
  };
  const handleChangeAvatar = (evt) => {
    console.log(evt.target.files[0]);
    changeField(evt.target.files[0], 'avatar');
  };
  return (
    <Page>
      <h1>Inscription en tant que créateur</h1>
      <p>Informations sur l'inscription</p>
      <section className="login-form">
        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="firstName"
            placeholder="Prénom"
            onChange={changeField}
            value={firstName}
          />
          <Field
            name="lastName"
            placeholder="Nom"
            onChange={changeField}
            value={lastName}
          />
          <Field
            name="pseudo"
            placeholder="Pseudo"
            onChange={changeField}
            value={pseudo}
          />
          <Field
            name="email"
            type="email"
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
          <Field
            name="phone"
            placeholder="Télephone"
            onChange={changeField}
            value={phone}
          />
          <Field
            name="brand"
            placeholder="Nom de la marque"
            onChange={changeField}
            value={brand}
          />
          <Field
            name="facebook"
            placeholder="Lien facebook"
            onChange={changeField}
            value={facebook}
          />
          <Field
            name="twitter"
            placeholder="Lien twitter"
            onChange={changeField}
            value={twitter}
          />
          <Field
            name="instagram"
            placeholder="Lien instagram"
            onChange={changeField}
            value={instagram}
          />
          <Field
            name="pinterest"
            placeholder="Lien pinterest"
            onChange={changeField}
            value={pinterest}
          />
          <Field
            name="linkedin"
            placeholder="Lien linkedin"
            onChange={changeField}
            value={linkedin}
          />
          <Field
            name="website"
            placeholder="Lien de votre site"
            onChange={changeField}
            value={website}
          />
          <select onChange={handleChangeSelect} value={category}>
            <option value="">Choisir une catégorie</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.categoryName}
              </option>
            ))}
          </select>
          <textarea value={description} onChange={handleChangeTextarea} placeholder="Décrivez votre activité ici" />
          <label htmlFor="avatar">Choisir un avatar
            <input id="avatar" type="file" accept=".png, .jpg, .jpeg" onChange={handleChangeAvatar} />
          </label>
          <button
            type="submit"
            className="login-form-button"
          >
            Je m'inscris
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

InscriptionCreator.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  pinterest: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
  })).isRequired,
  description: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleInscription: PropTypes.func.isRequired,
};

export default InscriptionCreator;
