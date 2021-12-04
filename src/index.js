import React from 'react';
import ReactDOM from 'react-dom';
import LoadingBar, { hideLoading } from 'react-redux-loading-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/configureStore';
import { showToast } from './redux/toast';
import { api } from './API';
import App from './App';
import './index.css';

api.interceptors.request.use((config) => {
  const { auth: { token } } = store.getState();
  const authConfig = { ...config };
  if (token) {
    authConfig.headers.Authorization = token;
  }
  return authConfig;
});

api.interceptors.response.use((res) => res, (error) => {
  store.dispatch(showToast(error.message));
  store.dispatch(hideLoading());
  throw error;
});

ReactDOM.render(
  <Provider store={store}>
    <LoadingBar />
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
