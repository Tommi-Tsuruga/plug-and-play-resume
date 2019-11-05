import { GET_LISTING, DELETE_LISTING, ADD_LISTING } from '../actions/types.js';

const initialState = {
  listing: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTING:
      return {
        ...state,
        listing: action.payload
      };
    case DELETE_LISTING:
      return {
        ...state,
        listing: state.listing.filter(listing => listing.id !== action.payload)
      };
    case ADD_LISTING:
      return {
        ...state,
        listing: [...state.listing, action.payload]
      };
    default:
      return state;
  }
}
