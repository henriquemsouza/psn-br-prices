import * as types from '../constants/actionTypes';
import initialState from '../initialState';


function errors(state = initialState.errors, action) {
  switch (action.type) {
    case types.FETCH_ALL_GAMES_IN_DB_FAILED:
    case types.SEARCH_BY_TITLE_FAILED:
      console.error(action);
      return [...state, action];

    default:
      return state;
  }
}


export default errors;
