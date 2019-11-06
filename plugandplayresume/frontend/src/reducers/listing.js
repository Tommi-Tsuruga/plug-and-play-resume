import { GET_LISTING, DELETE_LISTING, ADD_LISTING } from '../actions/types.js';

const initialState = {
  listingInfo: []
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
    default:
      return state;
  }
}
