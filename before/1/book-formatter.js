class BookFormatter {
    formatCSV(books) {
        let csvBooks = 'data:text/csv;charset=utf-8,';
        for (let book of books) {
            const { author, title, issueDate, description, price } = book;
            const bookLine = `${author},${title},${issueDate},${description},${price}\n`;
            csvBooks += bookLine;
        }
        return csvBooks;
    }

    formatJSON(books) {
        const jsonBooks = {};
        for (let book of books) {
            Object.assign(jsonBooks, {
                [book.id]: book
            });
        }
        return JSON.stringify(jsonBooks);
    }

    formatXML(books) {
        return books.reduce((result, book) => {
            const { author, title, issueDate, description, price } = book;
            const xmlBook = `<author>${author}</author><title>${title}</title><issue-date>${issueDate}</issue-date><description>${description}</description><price>${price}</price>`
            return result + xmlBook;
        }, '<?xml version="1.0"?>');
    }

    format(type, books) {
        switch(type) {
            case 'json':
                return this.formatJSON(books);
            case 'csv':
                return this.formatCSV(books);
            case 'xml':
                return this.formatXML(books);
        }
    }
}

module.exports = BookFormatter;