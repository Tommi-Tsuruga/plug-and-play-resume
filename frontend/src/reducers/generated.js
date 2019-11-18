import { FETCH_GENERATED } from "../actions/types.js";

const generatedDefaultState = {
  generatedInfo: [],
  isLoading: true
};

export default (state = generatedDefaultState, action) => {
  switch (action.type) {
    case FETCH_GENERATED:
      return {
        ...state,
        generatedInfo: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
