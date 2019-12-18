import { FETCH_GENERATED, CREATE_PDF } from '../actions/types.js';

const generatedDefaultState = {
  generatedInfo: [],
  generatedPDF: [],
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

    case CREATE_PDF:
      return {
        ...state,
        generatedPDF: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
