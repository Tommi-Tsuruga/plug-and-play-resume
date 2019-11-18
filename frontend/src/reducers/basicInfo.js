import { FETCH_BASIC_INFO, UPDATE_BASIC_INFO } from "../actions/types";

// BasicInfo Reducer
const basicInfoReducerDefaultState = {
    first_name: '',
    last_name: '',
    email: ''
};

export default function(state = basicInfoReducerDefaultState, action) {
    switch (action.type) {
        case FETCH_BASIC_INFO:
            return {
                ...state,
                ...action.payload
            };
        case UPDATE_BASIC_INFO:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};