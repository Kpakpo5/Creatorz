import Data from 'src/data';
import { SAVE_CREATORS } from '../actions/creators';

export const initialState = {
  listCreator: Data,
  loadingCreators: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CREATORS:
      return {
        ...state,
        listCreator: action.creators,
        loadingCreators: false,
      };
    default:
      return state;
  }
};

export default reducer;
