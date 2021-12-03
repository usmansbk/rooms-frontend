import React from 'react';
import ReactDOM from 'react-dom';
import { LoadingBar } from 'react-redux-loading-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/configureStore';
import { http } from './API';
import App from './App';
import { setError } from './redux/actions';
import './index.css';

http.interceptors.request.use((config) => {
  const { auth: { token } } = store.getState();
  const authConfig = { ...config };
  if (token) {
    authConfig.headers.Authorization = token;
  }
  return authConfig;
}, (error) => {
  store.dispatch(setError(error.message));
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LoadingBar />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
