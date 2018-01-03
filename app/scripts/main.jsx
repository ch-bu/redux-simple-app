import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx';
import {Provider} from 'react-redux';
import store from './store.jsx';

// Get body tag with id of container
const app = document.getElementById('container');

// subcribe to localStorage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

// Fire up the app
ReactDom.render(<Provider store={store}>
    <App />
  </Provider>, app);
