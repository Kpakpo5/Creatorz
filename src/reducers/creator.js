import Data from 'src/data';

export const initialState = {
  listCreator: Data,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
