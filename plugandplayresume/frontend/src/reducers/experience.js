import { GET_EXPERIENCE } from "../actions/types.js";

const initialState = {
  experience: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload
      };
    default:
      return state;
  }
}
