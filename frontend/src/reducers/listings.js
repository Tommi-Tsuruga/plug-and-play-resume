import {
  FETCH_LISTINGS,
  DELETE_LISTING,
  ADD_LISTING,
  ADD_RESUME
} from '../actions/types.js';

const listingReducerDefaultState = {
  isLoading: false,
  listingInfo: [],
  resumeInfo: []
};

export default (state = listingReducerDefaultState, action) => {
  switch (action.type) {
    case FETCH_LISTINGS:
      return {
        ...state,
        listingInfo: action.payload
      };
    case DELETE_LISTING:
      return {
        ...state,
        listingInfo: state.listingInfo.filter(({id}) => id !== action.payload)
      };
    case ADD_LISTING:
      return {
        ...state,
        listingInfo: [...state.listingInfo, action.payload]
      };
    case ADD_RESUME:
      return {
        ...state,
        resumeInfo: [...state.resumeInfo, action.payload]
      };
    default:
      return state;
  }
}
