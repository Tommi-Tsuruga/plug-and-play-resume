/**
 * filters.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */


// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_Title
export const sortByTitle = () => ({
    type: 'SORT_BY_TITLE'
});
// SORT_BY_COMPANY
export const sortByCompany = () => ({
    type: 'SORT_BY_COMPANY'
});
// SET_START_DATE
export const setStartDate = (start) => ({
    type: 'SET_START_DATE',
    start
});
// SET_END_DATE
export const setEndDate = (end) => ({
    type: 'SET_END_DATE',
    end
});



// // SORT_BY_START_DATE
// export const sortByStartDate = (start) => ({
//     type: 'SORT_BY_START_DATE'
// });
// // SORT_BY_DATE
// export const sortByEndDate = (end) => ({
//     type: 'SORT_BY_END_DATE'
// });