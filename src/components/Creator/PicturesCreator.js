import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const PicturesCreator = ({ picture }) => (
  <div className="creator-carousel">
    <img src={picture} alt="oeuvre du créateur" />
  </div>
);

PicturesCreator.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default PicturesCreator;
