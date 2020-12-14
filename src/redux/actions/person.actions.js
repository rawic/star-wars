import { store } from '../store';
import { personConstants } from '../../constants';

export const personActions = {
  update,
};

function update(person) {
  store.dispatch({ type: personConstants.UPDATE_PERSON, payload: person });
}
