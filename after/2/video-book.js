const AudioBook = require('./audio-book');

class VideoBook extends AudioBook {
    constructor(author, title, issueDate, description, price) {
        super(author, title, issueDate, description, price);

        this.type = 'video';
    }

    screenshot() {
        console.log('Screenshot copied to clipboard!');
    }
}

module.exports = VideoBook;
