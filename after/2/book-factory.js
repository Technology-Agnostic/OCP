const Book = require('./book');

class BookFactory {
    createBook({ author, title, issueDate, description, price }) {
        return new Book(author, title, issueDate, description, price);
    }
}

module.exports = BookFactory;