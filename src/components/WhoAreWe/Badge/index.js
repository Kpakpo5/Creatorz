import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ firstName, agileRole, linkedIn }) => (
  <div className="badge">
    <div className="badge-picture">
      <img src="" alt="avatar du fondateur" />
    </div>
    <div className="badge-infos">
      <h4>{firstName}</h4>
      <p>{agileRole}</p>
      <a href={linkedIn}>Profil LinkedIn</a>
    </div>
  </div>
);

Badge.propTypes = {
  firstName: PropTypes.string.isRequired,
  agileRole: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
};

export default Badge;
