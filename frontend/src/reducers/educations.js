/**
 * education.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import {ADD_EDUCATION, FETCH_EDUCATIONS} from "../actions/types";

// Education Reducer
const educationReducerDefaultState = {
    education: {},
    educations: []
};

export default (state = educationReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_EDUCATION:
            return {
                ...state,
                education: action.data
            };
        case FETCH_EDUCATIONS:
            return {
                ...state,
                educations: [...action.data]
            };
        default:
            return state;
    }
};
