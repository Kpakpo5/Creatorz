import React from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';

const TestUserApi = ({ testUserApi }) => (
  <Page>
    <button type="button" onClick={testUserApi}>Je veux les infos !</button>
  </Page>
);

TestUserApi.propTypes = {
  testUserApi: PropTypes.func.isRequired,
};

export default TestUserApi;
