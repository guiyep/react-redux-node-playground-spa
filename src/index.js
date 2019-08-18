import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app';
import { Provider } from 'react-redux';
import { initStore } from './store';

ReactDOM.render(
  <Provider store={initStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
