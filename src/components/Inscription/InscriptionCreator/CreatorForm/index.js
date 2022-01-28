import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/LoginForm/Field';
import { Redirect } from 'react-router-dom';

import '../style.scss';

const CreatorForm = ({
  firstname,
  lastname,
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
  categoryId,
  categoriesList,
  description,
  changeField,
  handleInscriptionCreator,
  logged,
  handleUpdateCreator,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (logged) {
      handleUpdateCreator();
    }
    else {
      handleInscriptionCreator();
    }
  };
  const handleChangeSelect = (evt) => {
    changeField(evt.target.value, 'categoryId');
  };
  const handleChangeTextarea = (evt) => {
    changeField(evt.target.value, 'description');
  };
  const handleChangeAvatar = (evt) => {
    console.log(evt.target.files[0]);
    changeField(evt.target.files[0], 'avatar');
  };
  const handleChangePictures = (evt) => {
    console.log(evt.target.files);
    changeField(evt.target.files[0], 'picture1');
    changeField(evt.target.files[1], 'picture2');
    changeField(evt.target.files[2], 'picture3');
  };
  return (
    <section className="inscription">
      <form className="inscription-form" onSubmit={handleSubmit} encType="multipart/form-data" method="post">
        <Field
          name="firstname"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
          required="required"
        />
        <Field
          name="lastname"
          placeholder="Nom"
          onChange={changeField}
          value={lastname}
          required="required"
        />
        <Field
          name="pseudo"
          placeholder="Pseudo"
          onChange={changeField}
          value={pseudo}
          required="required"
        />
        <Field
          name="email"
          type="email"
          placeholder="Adresse Email"
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
          required="required"
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
        <select onChange={handleChangeSelect} value={categoryId} className="select" required>
          <option value="">Choisir une catégorie</option>
          {categoriesList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.category_name}
            </option>
          ))}
        </select>
        <textarea className="textarea" value={description} onChange={handleChangeTextarea} placeholder="Décrivez votre activité ici" required />
        <label htmlFor="avatar">Choisissez l'avatar
          <input id="avatar" type="file" accept=".png, .jpg, .jpeg" onChange={handleChangeAvatar} />
        </label>
        <label htmlFor="pictures">Choisissez 3 photos
          <input id="pictures" type="file" multiple accept=".png, .jpg, .jpeg" onChange={handleChangePictures} />
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

CreatorForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  phone: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  pinterest: PropTypes.string,
  linkedin: PropTypes.string,
  website: PropTypes.string,
  categoryId: PropTypes.number,
  categoriesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category_name: PropTypes.string.isRequired,
  })).isRequired,
  description: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleInscriptionCreator: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  handleUpdateCreator: PropTypes.func.isRequired,
};

CreatorForm.defaultProps = {
  password: '',
  facebook: '',
  twitter: '',
  instagram: '',
  pinterest: '',
  linkedin: '',
  website: '',
  categoryId: '',
};

export default CreatorForm;
