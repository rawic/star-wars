import { store } from '@redux/store';
import { personConstants } from '@redux/constants';

export const personActions = {
  update,
};

function update(person) {
  store.dispatch({ type: personConstants.UPDATE_PERSON, payload: person });
}
