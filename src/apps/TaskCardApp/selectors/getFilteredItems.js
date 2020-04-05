import moment from 'moment';

// Get filtered Items

const getFilteredItems = (items, { text, sortBy }) => {

    return items.filter((item) => {
        const textMatch = item.note.toLowerCase().includes(text.toLowerCase());
        const createdAtMoment = moment(item.createdAt);
        return textMatch && createdAtMoment;

    }).sort((a, b) => {
        if (sortBy === 'newest') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'easliest') {
            return b.createdAt < a.createdAt ? 1 : -1;
        } 
    });
};

export default getFilteredItems