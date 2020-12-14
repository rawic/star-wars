import { store } from '../store';
import { filtersConstants } from '../../constants';

export const filtersActions = {
  text,
  sortBy,
};

function text(value) {
  store.dispatch({ type: filtersConstants.FILTER_TEXT, payload: value });
}

function sortBy(value) {
  store.dispatch({ type: filtersConstants.SORT_BY, payload: value });
}
