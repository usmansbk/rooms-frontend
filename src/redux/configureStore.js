import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth';
import roomsReducer from './rooms';
import toastReducer from './toast';
import reservationsReducer from './reservations';

const reducer = combineReducers({
  loadingBar: loadingBarReducer,
  toast: toastReducer,
  auth: authReducer,
  rooms: roomsReducer,
  reservations: reservationsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loadingBar', 'toast'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);

export default store;
