import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './reducers/auth';
import roomsReducer from './reducers/rooms';
import reservationsReducer from './reducers/reservations';

const reducer = combineReducers({
  loadingBar: loadingBarReducer,
  auth: authReducer,
  rooms: roomsReducer,
  reservations: reservationsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
