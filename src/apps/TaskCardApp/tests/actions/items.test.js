import {addItem, removeItem} from '../../actions/items';

test('should setup Remove Item', () => {
    const action = removeItem({id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_ITEM',
        id: '123abc'
    });
});


test('should setup add expense with provided values', () => {
    const itemData = {
        createdAt: 1000,
        note: 'This is my rent payment'
    };

    const action = addItem(itemData);
    expect(action).toEqual({
        type: 'ADD_ITEM',
        expense: {
            ...itemData,
            id: expect.any(String)
        }
    });
});

test('should setup add item with default values', () => {
    
    const action = addItem();

    expect(action).toEqual({
        type: 'ADD_ITEM',
        expense: {
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    });
});