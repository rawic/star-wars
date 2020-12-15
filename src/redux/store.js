import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '@services';

import rootReducer from './reducers';
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  saveState({
    ...store.getState(),
  });
});

export { store };
