const Book = require('./book');
const AudioBook = require('./audio-book');
const VideoBook = require('./video-book');

class BookFactory {
    createBook({ author, title, issueDate, description, price, type }) {
        switch(type) {
            case 'audio':
                return new AudioBook(author, title, issueDate, description, price);
            case 'video':
                return new VideoBook(author, title, issueDate, description, price);
            default:
                return new Book(author, title, issueDate, description, price);
        }
    }
}

module.exports = BookFactory;