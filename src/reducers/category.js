import { categories } from 'src/data';

export const initialState = {
  categoryList: categories,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
