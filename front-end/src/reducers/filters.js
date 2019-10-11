import moment from 'moment';

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  start: moment().format("MM/DD/YYYY"),
  end: moment().format("MM/DD/YYYY")
};

/**
 * filters.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'title'
      };
    case 'SORT_BY_COMPANY':
      return {
        ...state,
        sortBy: 'company'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        start: action.start
      };
    case 'SET_END_DATE':
      return {
        ...state,
        end: action.end
      };
    default:
      return state;
  }
}
//     case 'SORT_BY_START_DATE':
//       return {
//         ...state,
//         sortBy: 'start'
//       };
//     case 'SORT_BY_END_DATE':
//       return {
//         ...state,
//         sortBy: 'end'
//       };

