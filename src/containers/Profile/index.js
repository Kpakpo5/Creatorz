import { connect } from 'react-redux';
import Profile from 'src/components/Profile';
import { fetchUser, toggleModal, deleteProfile } from 'src/actions/user';

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  loadingUser: state.user.loadingUser,
  modalIsOpen: state.user.modalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: function () {
    dispatch(fetchUser());
  },
  toggleModal: function () {
    dispatch(toggleModal());
  },
  deleteProfile: function () {
    dispatch(deleteProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
