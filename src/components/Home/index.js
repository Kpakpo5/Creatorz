/* eslint-disable max-len */
import React from 'react';
import Page from 'src/components/Page';
import Card from 'src/components/Card';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './style.scss';

const Home = ({ listCreator }) => (
  <Page>
    <p className="home-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis in necessitatibus inventore officiis! Sit nam pariatur aspernatur laboriosam, eaque illum temporibus tenetur dignissimos harum laudantium! Excepturi itaque harum, est laudantium a, nihil modi inventore quis vel nesciunt, explicabo aliquid. Labore, nesciunt! Voluptatum voluptate deserunt assumenda nam aspernatur, sequi delectus consectetur! Reprehenderit consectetur voluptates laudantium vitae, accusantium quidem eius aliquam, neque, iure officiis officia odio quae quaerat ducimus! Quos dolorem enim incidunt laborum non, minus ad expedita quod commodi eveniet alias quaerat repellendus suscipit exercitationem mollitia ipsam explicabo culpa deleniti doloribus amet asperiores dolor sint. Veniam odio reiciendis quis quia distinctio.</p>
    <div className="creators-list">
      {listCreator.slice(0, 5).map((creator) => (
        <Card key={creator.id} {...creator} />
      ))}
      <article className="card link-solo">
        <Link to="/creators" className="card-link">
          Voir la liste de tous les créateurs
        </Link>
      </article>
    </div>
  </Page>
);

Home.propTypes = {
  listCreator: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Home.defaultProps = {
  listCreator: null,
};

export default Home;
