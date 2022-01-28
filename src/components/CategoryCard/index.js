import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

const CategoryCard = ({
  categoryName,
  picture,
  slug,
  description,
}) => (
  <article className="categorycard">
    <div className="categorycard-img">
      <img src={picture} alt="aperçu de la categorie" />
    </div>
    <div className="categorycard-content">
      <h2 className="categorycard-title">{categoryName}</h2>
      <p className="categorycard-description">{description}</p>
      <Link to={`/categorie/${slug}`} className="categorycard-link">
        Découvrez les créateurs
      </Link>
    </div>
  </article>
);

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default CategoryCard;
