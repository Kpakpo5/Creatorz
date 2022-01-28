import React from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import Card from 'src/components/Card';

import './style.scss';

const CreatorsPerCategory = ({ category, listCreator }) => {
  if (!listCreator) {
    return (
      <Page>
        <h2 className="creators-title">{category.categoryName}</h2>
        <p className="creators-desc">{category.description}</p>
        <h2 className="creators-title">Bientôt en ligne...</h2>
      </Page>
    );
  }
  return (
    <Page>
      <h2 className="creators-title">{category.categoryName}</h2>
      <p className="creators-desc">{category.description}</p>
      <div className="creators-list-grid">
        {listCreator.map((creator) => (
          <Card key={creator.id} {...creator} />
        ))}
      </div>
    </Page>
  );
};
CreatorsPerCategory.propTypes = {
  category: PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  listCreator: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

CreatorsPerCategory.defaultProps = {
  listCreator: null,
  category: null,
};

export default CreatorsPerCategory;
