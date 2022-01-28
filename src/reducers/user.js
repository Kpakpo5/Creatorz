import { CHANGE_VALUE, LOGOUT, SAVE_USER } from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  pseudo: '',
  phone: '',
  brand: '',
  facebook: '',
  twitter: '',
  instagram: '',
  pinterest: '',
  linkedin: '',
  website: '',
  category: '',
  description: '',
  avatar: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        email: '',
        password: '',
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;
