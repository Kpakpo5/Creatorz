import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from 'src/components/App/Loading';
import Page from 'src/components/Page';
import Creator from 'src/components/Creator';
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';

import User from './User';
import './style.scss';

const Profile = ({
  currentUser,
  fetchUser,
  loadingUser,
  toggleModal,
  modalIsOpen,
  deleteProfile,
}) => {
  useEffect(fetchUser, []);
  if (loadingUser) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }
  let isCreator = false;
  if (currentUser.roles[0] === 'ROLE_CREATOR') {
    isCreator = true;
  }
  const handleDelete = () => {
    deleteProfile();
    toggleModal();
  };
  return (
    <Page>
      {isCreator && (
        <Creator creator={currentUser} />
      )}
      {!isCreator && (
        <User {...currentUser} />
      )}
      <Link to="/profil/mise-a-jour">
        <Button id="update-button">Modifier mon profil</Button>
      </Link>
      <Modal
        basic
        onClose={toggleModal}
        onOpen={toggleModal}
        open={modalIsOpen}
        size="small"
        trigger={<Button id="delete-button">Supprimer mon compte</Button>}
      >
        <Header icon>
          <Icon name="warning sign" />
          Suppression de compte
        </Header>
        <Modal.Content>
          <p>
            Souhaitez vous vraiment supprimer votre compte ?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={toggleModal}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted onClick={handleDelete}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Page>
  );
};

Profile.propTypes = {
  currentUser: PropTypes.shape({
    roles: PropTypes.arrayOf(PropTypes.string),
  }),
  loadingUser: PropTypes.bool,
  fetchUser: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool,
};

Profile.defaultProps = {
  currentUser: null,
  loadingUser: false,
  modalIsOpen: false,
};

export default Profile;
