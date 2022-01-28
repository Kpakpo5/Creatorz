import { connect } from 'react-redux';
import InscriptionUser from 'src/components/Inscription/InscriptionUser';

import { changeValue, inscription } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudo: state.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  handleInscriptionUser: () => {
    dispatch(inscription());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InscriptionUser);
