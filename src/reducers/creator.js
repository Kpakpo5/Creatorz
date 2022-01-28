// Le reducer permet de décrire les évolutions du state,
// c'est une fonction nécessaire au fonctionnement du store
// Il a pour mission de construire un nouveau state à
// partir d’une intention (action) et du state actuel.

import { SAVE_CREATORS, SAVE_COMMENTS } from '../actions/creators';

export const initialState = {
  listCreator: [],
  comments: [],
  loadingCreators: true,
  loadingComment: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CREATORS:
      return {
        ...state,
        listCreator: action.creators,
        loadingCreators: false,
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: action.comments,
        loadingComment: false,
      };
    default:
      return state;
  }
};

export default reducer;
