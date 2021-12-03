import React from 'react';
import ReactDOM from 'react-dom';
import { LoadingBar } from 'react-redux-loading-bar';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <LoadingBar />
    <App />
  </Provider>,
  document.getElementById('root'),
);
