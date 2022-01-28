import { connect } from 'react-redux';
import InscriptionCreator from 'src/components/Inscription/InscriptionCreator';
import { changeValue, inscription } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  pseudo: state.user.pseudo,
  phone: state.user.phone,
  brand: state.user.brand,
  facebook: state.user.facebook,
  twitter: state.user.twitter,
  instagram: state.user.instagram,
  pinterest: state.user.pinterest,
  linkedin: state.user.linkedin,
  website: state.user.website,
  categories: state.category.categoryList,
  category: state.user.category,
  description: state.user.description,
  avatar: state.user.avatar,
  logo: state.user.logo,
  picture1: state.user.picture1,
  picture2: state.user.picture2,
  picture3: state.user.picture3,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  handleInscription: () => {
    dispatch(inscription());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InscriptionCreator);
