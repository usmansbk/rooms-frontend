import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../../API';

const LOAD_ITEMS = 'rooms/items';

const loadItems = (payload) => ({
  type: LOAD_ITEMS,
  payload,
});

export const fetchRooms = async (dispatch) => {
  dispatch(showLoading());

  const items = await API.getRooms();
  dispatch(loadItems(items));

  dispatch(hideLoading());
};

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state, items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
