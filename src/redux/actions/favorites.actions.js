import { store } from '../store';
import { favoritesConstants } from '../../constants';

export const favoritesActions = {
  add,
  remove,
};

function add(person) {
  store.dispatch({ type: favoritesConstants.ADD_FAVORITE, payload: person });
}

function remove(person) {
  store.dispatch({ type: favoritesConstants.REMOVE_FAVORITE, payload: person });
}
