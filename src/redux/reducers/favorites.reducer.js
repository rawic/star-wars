import { favoritesConstants } from '@redux/constants';

export const favorites = (state = [], action) => {
  switch (action.type) {
    case favoritesConstants.ADD_FAVORITE:
      return [...state, action.payload];
    case favoritesConstants.REMOVE_FAVORITE:
      const newFavorites = state.filter(
        ({ name }) => name !== action.payload.name
      );
      return newFavorites;
    default:
      return state;
  }
};
