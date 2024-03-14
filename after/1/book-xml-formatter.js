class BookXMLFormatter {
    format(books) {
        return books.reduce((result, book) => {
            const { author, title, issueDate, description, price } = book;
            const xmlBook = `<author>${author}</author><title>${title}</title><issue-date>${issueDate}</issue-date><description>${description}</description><price>${price}</price>`
            return result + xmlBook;
        }, '<?xml version="1.0"?>');
    }
}

module.exports = BookXMLFormatter;