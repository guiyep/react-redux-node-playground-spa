import { createStore, applyMiddleware } from 'redux';
import { initialState } from './initial-state';
import thunk from 'redux-thunk';
import reducers from './reducers/root-reducer';

export function initStore() {
  return createStore(reducers, initialState, applyMiddleware(thunk));
}
