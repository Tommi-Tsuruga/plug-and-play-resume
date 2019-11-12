import { FETCH_GENERATED } from "../actions/types.js";

const generatedDefaultState = {
  generatedInfo: []
};

export default (state = generatedDefaultState, action) => {
  switch (action.type) {
    case FETCH_GENERATED:
      return {
        ...state,
        generatedInfo: action.payload
      };
    default:
      return state;
  }
}
