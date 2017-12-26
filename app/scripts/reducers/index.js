import {combineReducers} from 'redux';
import todos from './todos';
import searchterms from './searchterms';

export default combineReducers({
  todos,
  searchterms,
});
