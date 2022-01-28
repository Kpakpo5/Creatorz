import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Card = ({
  brand,
  category,
  picture,
  slug,
}) => (
  <article className="card">
    <img className="card-img" src={picture} alt="oeuvre du créateur" />
    <div className="card-content">
      <h2 className="card-title">{brand}</h2>
      <p className="card-tag">{category}</p>
      <Link to={`/creator/${slug}`} className="card-link">
        Découvrir ce créateur
      </Link>
    </div>
  </article>
);

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;
