/**
 * education.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */
import {
    ADD_EDUCATION, DELETE_EDUCATION, EDIT_EDUCATION, FETCH_EDUCATIONS
} from "../actions/types";

// Education Reducer
const educationReducerDefaultState = {
    educations: []
};

export default (state = educationReducerDefaultState, action) => {
    switch (action.type) {
        case FETCH_EDUCATIONS:
            return {
                ...state,
                educations: action.payload
            };
        case ADD_EDUCATION:
            return {
                ...state,
                educations: [ ...state.educations, action.payload ]
            };
        case EDIT_EDUCATION:
            return {
                ...state,
                educations: state.educations.map(
                    education => education.id === parseInt(action.id) ?
                        {
                            ...education,
                            ...action.payload
                        } : education)
            };
        case DELETE_EDUCATION:
            return {
                ...state,
                educations: state.educations.filter(
                    ({id}) => id !== parseInt(action.payload))
            };
        default:
            return state;
    }
};
