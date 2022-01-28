import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logout, toggleSidebar, toggleMedium } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  isSidebarOpen: state.user.isSidebarOpen,
  isMedium: state.user.isMedium,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
  toggleSidebar: () => {
    dispatch(toggleSidebar());
  },
  toggleMedium: () => {
    dispatch(toggleMedium());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
