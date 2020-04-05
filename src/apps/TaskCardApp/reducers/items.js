// Expenses Reducer
import moment from 'moment';

const itemsReducerDefaultState = [
    { id: '1', note: 'Item One', createdAt: moment().unix(), selected:false },
    { id: '2', note: 'Item Two', createdAt: moment().unix(), selected:false },
    { id: '3', note: 'Item Three', createdAt: moment().unix(), selected:false },
    { id: '4', note: 'Item four', createdAt: moment().unix(), selected:true }
];

const itemsReducer = (state = itemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_ITEM':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

export default itemsReducer;