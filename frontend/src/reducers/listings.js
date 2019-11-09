import {
  FETCH_LISTINGS,
  DELETE_LISTING,
  ADD_LISTING,
  ADD_RESUME
} from '../actions/types.js';

const listingReducerDefaultState = {
  listingInfo: [],
  resumeInfo: []
};

export default (state = listingReducerDefaultState, action) => {
  switch (action.type) {
    case FETCH_LISTINGS:
      return {
        ...state,
        listingInfo: action.data
      };
    case DELETE_LISTING:
      return {
        ...state,
        listingInfo: state.filter(({id}) => id !== action.id)
      };
    case ADD_LISTING:
      return {
        ...state,
        listingInfo: [...state.listingInfo, action.data]
      };
    case ADD_RESUME:
      return {
        ...state,
        resumeInfo: [...state.resumeInfo, action.data]
      };
    default:
      return state;
  }
}
