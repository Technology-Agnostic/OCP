class BookCSVFormatter {
    format(books) {
        let csvBooks = 'data:text/csv;charset=utf-8,';
        for (let book of books) {
            const { author, title, issueDate, description, price } = book;
            const bookLine = `${author},${title},${issueDate},${description},${price}\n`;
            csvBooks += bookLine;
        }
        return csvBooks;
    }
}

module.exports = BookCSVFormatter;