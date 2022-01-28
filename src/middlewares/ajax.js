/* eslint-disable dot-notation */
import axios from 'axios';
import { LOGIN, LOGOUT, saveUser } from '../actions/user';

const api = axios.create({
  baseURL: 'http://ec2-3-90-155-211.compute-1.amazonaws.com/api',
});
const ajax = (store) => (next) => (action) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  switch (action.type) {
    case LOGIN: {
      // on peut faire du destructuring sur plusieurs niveaux
      // const { user: { email, password } } = store.getState();
      const state = store.getState();
      api.post('/login_check', {
        username: state.user.email,
        password: state.user.password,
      }, config)
        .then((response) => {
          // je modifie mon instance d'axios pour y mémoriser le token,
          // toutes mes futures requetes incluront l'entete Authorization avec le token
          // jusqu'à ce que j'oublie le token
          console.log(response);
          api.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
          store.dispatch(saveUser());
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          alert('Mauvais identifiant/mot de passe');
          console.log(error);
        })
        .finally(() => {
          //
        });
      break;
    }
    case LOGOUT:
      // au logout on oublie le token
      // revient au meme que de passer la propriété à undefined
      delete api.defaults.headers.common.Authorization;
      break;
    default:
  }
  next(action);
};
export default ajax;
