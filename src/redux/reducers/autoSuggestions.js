import * as types from '../constants/actionTypes';
import initialState from '../initialState';


function autoSuggestions(state = initialState.autoSuggestions, action) {
    switch (action.type) {

        case types.RESET_ACTIVE_GAME:
            return initialState.autoSuggestions;
        default:
            return state;
    }
}


export default autoSuggestions;
