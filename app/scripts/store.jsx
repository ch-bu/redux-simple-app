import {createStore} from 'redux';
import reducer from './reducers';

const persistedState = localStorage.getItem('reduxState') ?
  JSON.parse(localStorage.getItem('reduxState')): {};

export default createStore(reducer, persistedState);
