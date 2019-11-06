/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import {ADD_EXPERIENCE, REMOVE_EXPERIENCE,FETCH_EXPERIENCES, EDIT_EXPERIENCE } from "../actions/types";

// Experience Reducer
const experienceReducerDefaultState = {
    experience: {},
    experiences: []
};
export default (state = experienceReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_EXPERIENCE:
            return {
                ...state,
                experience: action.data
            };
        case REMOVE_EXPERIENCE:
            return state.filter(({id}) => id !== action.id);
        case EDIT_EXPERIENCE:
            return state.map((experience) => {
                if (experience.id === action.id) {
                    return {
                        ...experience,
                        ...action.updates
                    };
                } else {
                    return experience;
                }
            });
        case FETCH_EXPERIENCES:
            return {
                ...state,
                experiences: [...action.data]
            };
        default:
            return state;
    }
};
