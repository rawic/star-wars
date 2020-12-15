import { store } from '@redux/store';
import { filtersConstants } from '@redux/constants';

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
