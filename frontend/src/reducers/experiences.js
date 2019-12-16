/**
 * experiences.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import {
    ADD_EXPERIENCE, EDIT_EXPERIENCE, FETCH_EXPERIENCES, REMOVE_EXPERIENCE
} from "../actions/types";

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
                experiences: state.experiences.filter(
                    ({ id }) => id !== parseInt(action.payload))
            };
        case EDIT_EXPERIENCE:
            return {
                ...state,
                experiences: state.experiences.map((experience) =>
                    experience.id === parseInt(action.id) ? {
                            ...experience,
                            ...action.payload
                        } : experience)
            };
        default:
            return state;
    }
};
