/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

// Experience Reducer
const experienceReducerDefaultState = [];

export default (state = experienceReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPERIENCE':
      return [
          ...state,
        action.experience
      ];
    case 'SET_START_DATE':
       return[
           ...state,
           //action.experience
       ];
    case  'SET_END_DATE':
      return[
          ...state,
          //action.experience
      ];

    case 'REMOVE_EXPERIENCE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPERIENCE':
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
    default:
      return state;
  }
};
