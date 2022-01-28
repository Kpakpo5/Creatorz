/* eslint-disable dot-notation */
import axios from 'axios';
import {
  LOGIN,
  login,
  LOGOUT,
  logout,
  loginUser,
  FETCH_USER,
  saveUser,
  INSCRIPTION_CREATOR,
  INSCRIPTION_USER,
  UPDATE_USER_PROFILE,
  UPDATE_CREATOR_PROFILE,
  DELETE_PROFILE,
} from '../actions/user';
import { FETCH_CREATORS, saveCreators } from '../actions/creators';
import { FETCH_CATEGORIES, saveCategories } from '../actions/categories';

const api = axios.create({
  baseURL: 'http://ec2-54-80-48-178.compute-1.amazonaws.com/api',
});
const ajax = (store) => (next) => (action) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  switch (action.type) {
    case FETCH_CREATORS:
      api.get('/users/creator')
        .then((response) => {
          // handle success
          console.log(response);
          store.dispatch(saveCreators(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
      break;
    case FETCH_CATEGORIES:
      api.get('/categories')
        .then((response) => {
          // handle success
          console.log(response);
          store.dispatch(saveCategories(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
      break;
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
          store.dispatch(loginUser());
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
    case FETCH_USER:
      api.get('/users/current')
        .then((response) => {
          // handle success
          console.log(response.data);
          store.dispatch(saveUser(response.data));
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
      break;
    case LOGOUT:
      // au logout on oublie le token
      // revient au meme que de passer la propriété à undefined
      delete api.defaults.headers.common.Authorization;
      break;
    case INSCRIPTION_USER:
    { const state = store.getState();
      const data = {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        roles: ['ROLE_USER'],
      };
      const configPicture = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      api.post('/users', data, config)
        .then((response) => {
          console.log(response);
          const formDataPicture = new FormData();
          formDataPicture.append('avatar', state.user.avatar, state.user.avatar.name);
          console.log(formDataPicture);
          api.post(`/users/${response.data.id}/upload-avatar`, formDataPicture, configPicture)
            .then((responseAvatar) => {
              console.log(responseAvatar);
            })
            .catch((errorAvatar) => {
              console.log(errorAvatar);
            });
          store.dispatch(login());
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          alert('Erreur');
          console.log(error);
        })
        .finally(() => {
          //
        });
      break;
    }
    case INSCRIPTION_CREATOR:
    { const state = store.getState();
      const data = {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        roles: ['ROLE_CREATOR'],
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        phone: state.user.phone,
        brand: state.user.brand,
        facebook: state.user.facebook,
        twitter: state.user.twitter,
        instagram: state.user.instagram,
        pinterest: state.user.pinterest,
        linkedin: state.user.linkedin,
        website: state.user.website,
        description: state.user.description,
        category: {
          id: state.user.categoryId,
        },
      };
      const configPicture = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      api.post('/users', data, config)
        .then((response) => {
          console.log(response);
          const formDataPicture = new FormData();
          formDataPicture.append('avatar', state.user.avatar, state.user.avatar.name);
          console.log(formDataPicture);
          api.post(`/users/${response.data.id}/upload-avatar`, formDataPicture, configPicture)
            .then((responseAvatar) => {
              console.log(responseAvatar);
            })
            .catch((errorAvatar) => {
              console.log(errorAvatar);
            });
          store.dispatch(login());
          /* const formDataPicture = new FormData();
          formDataPicture.append('avatar', state.user.avatar, state.user.avatar.name);
          formDataPicture.append('logo', state.user.logo, state.user.logo.name);
          formDataPicture.append('picture1', state.user.picture1, state.user.picture1.name);
          formDataPicture.append('picture2', state.user.picture2, state.user.picture2.name);
          formDataPicture.append('picture3', state.user.picture3, state.user.picture3.name);
          api.post(`/users/${response.data[1]}/`, formDataPicture, configPicture); */
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          alert('Erreur');
          console.log(error);
        })
        .finally(() => {
          //
        });
      break;
    }
    case UPDATE_USER_PROFILE:
    { const state = store.getState();
      const data = {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        roles: ['ROLE_USER'],
      };
      const configPicture = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      api.post(`/users/${state.user.currentUser.id}`, data, config)
        .then((response) => {
          console.log(response);
          const formDataPicture = new FormData();
          formDataPicture.append('avatar', state.user.avatar, state.user.avatar.name);
          console.log(formDataPicture);
          api.post(`/users/${response.data.id}/upload-avatar`, formDataPicture, configPicture)
            .then((responseAvatar) => {
              console.log(responseAvatar);
            })
            .catch((errorAvatar) => {
              console.log(errorAvatar);
            });
          store.dispatch(login());
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          alert('Erreur');
          console.log(error);
        })
        .finally(() => {
          //
        });
      break;
    }
    case UPDATE_CREATOR_PROFILE:
    { const state = store.getState();
      const data = {
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        roles: ['ROLE_CREATOR'],
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        phone: state.user.phone,
        brand: state.user.brand,
        facebook: state.user.facebook,
        twitter: state.user.twitter,
        instagram: state.user.instagram,
        pinterest: state.user.pinterest,
        linkedin: state.user.linkedin,
        website: state.user.website,
        description: state.user.description,
        category: {
          id: state.user.categoryId,
        },
      };
      const configPicture = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      api.post(`/users/${state.user.currentUser.id}`, data, config)
        .then((response) => {
          console.log(response);
          const formDataPicture = new FormData();
          formDataPicture.append('avatar', state.user.avatar, state.user.avatar.name);
          console.log(formDataPicture);
          api.post(`/users/${response.data.id}/upload-avatar`, formDataPicture, configPicture)
            .then((responseAvatar) => {
              console.log(responseAvatar);
            })
            .catch((errorAvatar) => {
              console.log(errorAvatar);
            });
          store.dispatch(login());
          /* const formDataPicture = new FormData();
          formDataPicture.append('avatar', state.user.avatar, state.user.avatar.name);
          formDataPicture.append('picture1', state.user.picture1, state.user.picture1.name);
          formDataPicture.append('picture2', state.user.picture2, state.user.picture2.name);
          formDataPicture.append('picture3', state.user.picture3, state.user.picture3.name);
          api.post(`/users/${response.data[1]}/`, formDataPicture, configPicture); */
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          alert('Erreur');
          console.log(error);
        })
        .finally(() => {
          //
        });
      break;
    }
    case DELETE_PROFILE: {
      const state = store.getState();
      api.post(`/users/delete/${state.user.currentUser}`, config)
        .then((response) => {
          console.log(response);
          store.dispatch(logout());
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          alert('Erreur lors de la suppression de compte');
          console.log(error);
        })
        .finally(() => {
          //
        });
      break;
    }
    default:
  }
  next(action);
};
export default ajax;
