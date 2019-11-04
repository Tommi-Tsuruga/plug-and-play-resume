/**
 * education.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

// Education Reducer
const educationReducerDefaultState = [];

export default (state = educationReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EDUCATION':
            return [
                ...state,
                action.education
            ];
        case 'FETCH_EDUCATIONS':
            return [
                ...state,
                ...action.educations
            ];
        default:
            return state;
    }
};
