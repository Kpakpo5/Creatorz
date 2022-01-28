import React from 'react';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import { Button, Image, List } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PicturesCreator from './PicturesCreator';

import './style.scss';

const Creator = ({ creator }) => (
  <Page>
    <section className="creator">
      <Carousel autoPlay showThumbs={false} dynamicHeight={false} className="carousel">
        {creator.pictures.map((picture) => (
          <PicturesCreator key={picture.id} {...picture} />
        ))}
      </Carousel>
      <div className="creator-info">
        <div className="creator-info-plus">
          <div className="creator-info-avatar">
            <Image src={creator.avatar} alt="avatar" avatar fluid />
          </div>
          <p className="creator-info-name">{creator.firstName} {creator.lastName}</p>
          <div className="creator-info-category">
            {creator.category}
          </div>
        </div>
        <List className="creator-info-list">
          <List.Item className="creator-info-brand">
            <List.Icon name="copyright outline" />
            <List.Content className="creator-info-brand">{creator.brand}</List.Content>
          </List.Item>
          <List.Item className="creator-info-desc">
            <List.Icon name="pencil" />
            <List.Content className="creator-info-desc">{creator.description}</List.Content>
          </List.Item>
          <List.Item className="creator-info-email">
            <List.Icon name="mail" />
            <List.Content className="creator-info-email">
              <a href={creator.mail} target="_blank" rel="noreferrer">{creator.mail}</a>
            </List.Content>
          </List.Item>
          <List.Item className="creator-info-phone">
            <List.Icon name="phone" />
            <List.Content className="creator-info-phone">{creator.phone}</List.Content>
          </List.Item>
          {creator.website && (
          <List.Item className="creator-info-website">
            <List.Icon name="linkify" />
            <List.Content className="creator-info-website">
              <a href={creator.website} target="_blank" rel="noreferrer">{creator.website}</a>
            </List.Content>
          </List.Item>
          )}
        </List>
        <div className="creator-info-social">
          {creator.facebook && (
          <Button secondary circular className="button" icon="facebook" href={creator.facebook} target="_blank" />
          )}
          {creator.twitter && (
          <Button secondary circular className="button" icon="twitter" href={creator.twitter} />
          )}
          {creator.linkedin && (
          <Button secondary circular className="button" icon="linkedin" href={creator.linkedin} />
          )}
          {creator.pinterest && (
          <Button secondary circular className="button" icon="pinterest" href={creator.pinterest} />
          )}
          {creator.instagram && (
          <Button secondary circular className="button" icon="instagram" href={creator.instagram} />
          )}
        </div>
      </div>
    </section>
  </Page>
);

Creator.propTypes = {
  creator: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    pinterest: PropTypes.string,
    instagram: PropTypes.string,
  }),
};

Creator.defaultProps = {
  creator: PropTypes.shape({
    website: null,
    facebook: null,
    twitter: null,
    linkedin: null,
    pinterest: null,
    instagram: null,
  }),
};

export default Creator;
