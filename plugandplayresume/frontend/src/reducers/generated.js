import { GET_GENERATED } from "../actions/types.js";

const initialState = {
  generatedInfo: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GENERATED:
      return {
        ...state,
        generatedInfo: action.payload
      };
    default:
      return state;
  }
}
