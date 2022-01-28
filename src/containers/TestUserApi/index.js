import { connect } from 'react-redux';
import TestUserApi from 'src/components/TestUserApi';
import { testUserApi } from '../../actions/user';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  testUserApi: () => {
    dispatch(testUserApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TestUserApi);
