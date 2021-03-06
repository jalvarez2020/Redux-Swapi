import { FETCHING, SUCCESS, ERROR } from "../actions/index";

const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action ) => {
  switch (action.type) {

    case FETCHING:
      return Object.assign( {}, state, {fetching: true} );

    case SUCCESS: 
      return Object.assign( {}, ...state, {characters: action.payload, fetching: false} );

    case ERROR:
      return Object.assign({}, state, {Error: action.errorMessage, fetching: false});
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
