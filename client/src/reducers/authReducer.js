import { TEST_DISPATCH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state, // we take the state variable and append data to it with the spread operator
        user: action.payload
      };
    default:
      return state;
  }
}
