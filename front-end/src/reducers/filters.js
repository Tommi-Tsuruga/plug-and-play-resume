// Filters Reducer

const filtersReducerDefaultState = {
  sortBy: 'date'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_COMPANY':
      return {
        ...state,
        sortBy: 'company'
      };
    case 'SORT_BY_START_DATE':
      return {
        ...state,
        sortBy: 'start_date'
      };
    case 'SORT_BY_END_DATE':
      return {
        ...state,
        sortBy: 'end_date'
      };
    default:
      return state;
  }
};
