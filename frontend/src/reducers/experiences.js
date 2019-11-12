/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import {ADD_EXPERIENCE, REMOVE_EXPERIENCE,FETCH_EXPERIENCES, EDIT_EXPERIENCE } from "../actions/types";

// Experience Reducer
const experienceReducerDefaultState = {
    experiences: []
};
export default (state = experienceReducerDefaultState, action) => {
    switch (action.type) {
        case FETCH_EXPERIENCES:
            return {
                ...state,
                experiences: action.payload
            };
        case ADD_EXPERIENCE:
            return {
                ...state,
                experiences: [ ...state.experiences, action.payload ]
            };
        case REMOVE_EXPERIENCE:
            return {
                ...state,
                experiences: state.experiences.filter(({id}) => id !== action.payload)
            };
        case EDIT_EXPERIENCE:
            return state.experiences.map((experience) => {
                if (experience.id === action.id) {
                    return {
                        ...experience,
                        ...action.payload
                    };
                } else {
                    return experience;
                }
            });
        default:
            return state;
    }
};
