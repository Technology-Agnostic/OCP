const VideoBook = require('./video-book');

class VideoBookFactory {
    createBook({ author, title, issueDate, description, price }) {
        return new VideoBook(author, title, issueDate, description, price);
    }
}

module.exports = VideoBookFactory;