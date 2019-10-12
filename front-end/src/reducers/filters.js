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
    default:
      return state;
  }
}


