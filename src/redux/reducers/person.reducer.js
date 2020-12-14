import { personConstants } from '../../constants';

export const person = (state = [], action) => {
  switch (action.type) {
    case personConstants.UPDATE_PERSON:
      return action.payload;
    default:
      return state;
  }
};
