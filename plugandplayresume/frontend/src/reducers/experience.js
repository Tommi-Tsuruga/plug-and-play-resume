import {
  GET_BASICINFO,
  DELETE_BASICINFO,
  ADD_BASICINFO
} from '../actions/types.js';

const initialState = {
  basicInfo: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BASICINFO:
      return {
        ...state,
        basicInfo: action.payload
      };
    case DELETE_BASICINFO:
      return {
        ...state,
        basicInfo: state.basicInfo.filter(
          basicInfo => basicInfo.id !== action.payload
        )
      };
    case ADD_BASICINFO:
      return {
        ...state,
        basicInfo: [...state.basicInfo, action.payload]
      };
    default:
      return state;
  }
}
