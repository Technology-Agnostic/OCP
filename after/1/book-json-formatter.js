class BookJSONFormatter {
    format(books) {
        const jsonBooks = {};
        for (let book of books) {
            Object.assign(jsonBooks, {
                [book.id]: book
            });
        }
        return JSON.stringify(jsonBooks);
    }
}

module.exports = BookJSONFormatter;