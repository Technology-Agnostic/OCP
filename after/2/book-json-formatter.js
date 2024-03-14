class BookJSONFormatter {
    format(books) {
        const jsonBooks = {};
        for (let book of books) {
            const { id, author, title, issueDate, description, price } = book;
            Object.assign(jsonBooks, {
                [id]: { author, title, issueDate, description, price }
            });
        }
        return JSON.stringify(jsonBooks);
    }
}

module.exports = BookJSONFormatter;