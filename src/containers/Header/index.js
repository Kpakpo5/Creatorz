import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logout, toggleSidebar } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  isSidebarOpen: state.user.isSidebarOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
  toggleSidebar: () => {
    dispatch(toggleSidebar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
