import moment from 'moment';

import {
    sortBy,
    setTextFilter
} from '../../actions/filters';

test('should generate sortBy action', () => {
    const action = sortBy();

    expect(action).toEqual({
        type: 'SORT_BY'
    });
});

test('should generate setTextFilter action with text value', () => {
    const text = 'some text'
    const action = setTextFilter(text);


    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate setTextFilter action w/ no default', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
