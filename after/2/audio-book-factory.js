const AudioBook = require('./audio-book');

class AudioBookFactory {
    createBook({ author, title, issueDate, description, price }) {
        return new AudioBook(author, title, issueDate, description, price);
    }
}

module.exports = AudioBookFactory;