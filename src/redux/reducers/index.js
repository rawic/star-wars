import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { filters } from './filters.reducer';
import { favorites } from './favorites.reducer';
import { person } from './person.reducer';

const rootReducer = combineReducers({
  authentication,
  person,
  favorites,
  filters,
});

export default rootReducer;
