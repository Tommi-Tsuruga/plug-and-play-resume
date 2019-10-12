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


