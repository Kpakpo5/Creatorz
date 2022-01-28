import axios from 'axios';
import { LOGIN, LOGOUT, saveUser } from '../actions/user';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // on peut faire du destructuring sur plusieurs niveaux
      // const { user: { email, password } } = store.getState();
      const state = store.getState();
      api.post('/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          // je modifie mon instance d'axios pour y mémoriser le token,
          // toutes mes futures requetes incluront l'entete Authorization avec le token
          // jusqu'à ce que j'oublie le token
          api.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
          store.dispatch(saveUser());
        })
        .catch((error) => {
          alert('Mauvais identifiant/mot de passe');
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
