import { filtersConstants } from '@redux/constants';

const initialState = {
  text: '',
  sortBy: '',
};

const text = (state, action) => {
  switch (action.type) {
    case filtersConstants.FILTER_TEXT:
      return action.payload;
    default:
      return state;
  }
};

const sort = (state, action) => {
  switch (action.type) {
    case filtersConstants.SORT_BY:
      return action.payload;
    default:
      return state;
  }
};

export const filters = (state = initialState, action) => {
  return {
    text: text(state.text, action),
    sortBy: sort(state.sortBy, action),
  };
};
