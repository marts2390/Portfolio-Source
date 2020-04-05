

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY
export const sortBy = (value) => ({
    type: 'SORT_BY',
    value
});
