import { FETCH_GENERATED, CREATE_PDF } from '../actions/types.js';
import { REMOVE_JOB_HISTORY } from "../actions/types";

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

      case REMOVE_JOB_HISTORY:
            return {
                ...state,
                generatedInfo: state.generatedInfo.filter(
                    ({ id }) => id !== parseInt(action.payload))
            };
    default:
      return state;
  }
};
