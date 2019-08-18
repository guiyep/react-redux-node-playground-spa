import { combineReducers } from 'redux';
import { reposReducer as repos } from './repos';

export default combineReducers({
  repos,
});
