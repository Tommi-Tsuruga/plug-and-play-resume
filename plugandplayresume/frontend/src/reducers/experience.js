import { GET_EXPERIENCE, DELETE_EXPERIENCE } from "../actions/types.js";

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
    case DELETE_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.filter(
          experience => experience.id !== action.payload
        )
      };
    default:
      return state;
  }
}
