import React from 'react';
import ReactDOM from 'react-dom';
import { LoadingBar } from 'react-redux-loading-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/configureStore';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LoadingBar />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
