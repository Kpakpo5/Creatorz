import { combineReducers } from 'redux';

import creatorReducer from './creator';
import userReducer from './user';

const rootReducer = combineReducers({
  creator: creatorReducer,
  user: userReducer,
});

export default rootReducer;
