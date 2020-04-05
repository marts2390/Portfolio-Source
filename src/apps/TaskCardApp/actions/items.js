import uuid from 'uuid';

// ADD_ITEM
export const addItem = (
    {
        // Defaults
        note = '',
        createdAt = 0,
    } = {}
) => ({
    type: 'ADD_ITEM',
    expense: {
        id: uuid(),
        note,
        createdAt,
    }
});

// REMOVE_ITEM
export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});

