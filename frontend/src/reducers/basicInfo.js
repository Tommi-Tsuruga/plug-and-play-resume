import {FETCH_BASIC_INFO, ADD_BASIC_INFO} from "../actions/types";

// BasicInfo Reducer
const basicInfoReducerDefaultState = {
    basicInfo: []
};

export default (state = basicInfoReducerDefaultState, action) => {
    switch (action.types) {
        case FETCH_BASIC_INFO:
            return {
                ...state,
                basicInfo: action.payload,
            };
        case ADD_BASIC_INFO:
            return {
                ...state,
                basicInfo: [...state.basicInfo, action.payload ]
            };
        default:
            return state;

    }
};