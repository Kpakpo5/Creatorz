import React from 'react';
import Page from 'src/components/Page';
import Badge from './Badge';

import './style.scss';

const WhoAreWe = () => (
  <Page>
    <div>
      <h2>Qui sommes nous ?</h2>
      <p>Nous sommes un groupe de développeurs junior issus de l'école O'clock, amoureux de l'art
        et désireux de le mettre à la portée de ceux qui le consomment
      </p>
      <h3>Les fondateurs de CreatOrz'</h3>
      <section className="founders">
        <Badge firstName="Edith" agileRole="Product Owner" linkedIn="#" />
        <Badge firstName="Kpakpo" agileRole="Scrum Master" linkedIn="#" />
        <Badge firstName="Manon" agileRole="Lead dev Front" linkedIn="#" />
        <Badge firstName="Naïka" agileRole="Git Master" linkedIn="#" />
        <Badge firstName="Latifa" agileRole="Lead dev Back" linkedIn="#" />
      </section>
    </div>
  </Page>
);

export default WhoAreWe;
