
// Filters Reducer

const filtersReducerDefaultState = {
    text: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.value,
                value: action.value
            };
        default:
            return state;
    }
};

export default filtersReducer;