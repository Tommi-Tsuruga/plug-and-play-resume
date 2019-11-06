import {
  GET_LISTING,
  DELETE_LISTING,
  ADD_LISTING,
  ADD_RESUME
} from '../actions/types.js';

const initialState = {
  listingInfo: [],
  resumeInfo: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTING:
      return {
        ...state,
        listingInfo: action.payload
      };
    case DELETE_LISTING:
      return {
        ...state,
        listingInfo: state.listingInfo.filter(
          listingInfo => listingInfo.id !== action.payload
        )
      };
    case ADD_LISTING:
      return {
        ...state,
        listingInfo: [...state.listingInfo, action.payload]
      };
    case ADD_RESUME:
      return {
        state,
        resumeInfo: [...state.resumeInfo, action.payload]
      };
    default:
      return state;
  }
}
