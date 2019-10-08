/**
 * filters.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// SORT_BY_Title
export const sortByTitle = () => ({
    type: 'SORT_BY_TITLE'
});
// SORT_BY_COMPANY
export const sortByCompany = () => ({
    type: 'SORT_BY_COMPANY'
});
// SORT_BY_START_DATE
export const sortByStartDate = (startDate) => ({
    type: 'SORT_BY_START_DATE'
});
// SORT_BY_DATE
export const sortByEndDate = (endDate) => ({
    type: 'SORT_BY_END_DATE'
});