const assert = require('node:assert');

const { AUDIO_BOOKS, VIDEO_BOOKS, BOOKS } = require('./books.mock');
const BookJSONFormatter = require('./book-json-formatter');
const BookCSVFormatter = require('./book-csv-formatter');
const BookFactory = require('./book-factory');
const AudioBookFactory = require('./audio-book-factory');
const VideoBookFactory = require('./video-book-factory');
const BookRepository = require('./book-repository');
const BookFormattingService = require('./book-formatting.service');

const BOOKS_URI = 'example://api.books-storage/books';
const AUDIO_BOOKS_URI = 'example://api.books-storage/audio-books';
const VIDEO_BOOKS_URI = 'example://api.books-storage/video-books'; 

describe('BookFormattingService', () => {
    fetch = (uri) => {
        switch (uri) {
            case BOOKS_URI:
                return Promise.resolve(BOOKS);
            case AUDIO_BOOKS_URI:
                return Promise.resolve(AUDIO_BOOKS);
            case VIDEO_BOOKS_URI:
                return Promise.resolve(VIDEO_BOOKS);
        }
    };

    const bookJSONFormatter = new BookJSONFormatter();
    const bookCSVFormatter = new BookCSVFormatter();

    const bookFactory = new BookFactory();
    const audioBookFactory = new AudioBookFactory();
    const videoBookFactory = new VideoBookFactory();

    const bookRepository = new BookRepository(bookFactory, BOOKS_URI);
    const audioBooksRepository = new BookRepository(audioBookFactory, AUDIO_BOOKS_URI);
    const videoBooksRepository = new BookRepository(videoBookFactory, VIDEO_BOOKS_URI);

    const bookFormattingService = new BookFormattingService(bookRepository);
    const audioBookFormattingService = new BookFormattingService(audioBooksRepository);
    const videoBookFormattingService = new BookFormattingService(videoBooksRepository);

    it('getBooksCSV should return list of books in CSV format', async () => {
        const EXPECTED_AUDIO_BOOKS_CSV = `data:text/csv;charset=utf-8,Alex Korb,The Upward Spiral,March 2015,A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an "upward spiral" out of depression,13.99\n`;
        const EXPECTED_VIDEO_BOOKS_CSV = 'data:text/csv;charset=utf-8,Eric Evans,Domain-Driven Design,August 2003,This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...,20.99\n';
        const EXPECTED_BOOKS_CSV = 'data:text/csv;charset=utf-8,Fyodor Dostoevsky,Crime and Punishment,1866,Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...,23.5\n';
        const booksCSV = await bookFormattingService.getFormattedBooks(bookCSVFormatter);
        const audioBooksCSV = await audioBookFormattingService.getFormattedBooks(bookCSVFormatter);
        const videoBooksCSV = await videoBookFormattingService.getFormattedBooks(bookCSVFormatter);
        assert.equal(booksCSV, EXPECTED_BOOKS_CSV);
        assert.equal(audioBooksCSV, EXPECTED_AUDIO_BOOKS_CSV);
        assert.equal(videoBooksCSV, EXPECTED_VIDEO_BOOKS_CSV);
    });

    it('getBooksJSON should return list of books in JSON format', async () => {
        const EXPECTED_BOOKS_JSON = '{"Fyodor Dostoevsky - Crime and Punishment - 23.5":{"author":"Fyodor Dostoevsky","title":"Crime and Punishment","issueDate":"1866","description":"Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...","price":23.5}}';
        const EXPECTED_AUDIO_BOOKS_JSON = '{"Alex Korb - The Upward Spiral - 13.99":{"author":"Alex Korb","title":"The Upward Spiral","issueDate":"March 2015","description":"A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an \\"upward spiral\\" out of depression","price":13.99}}';
        const EXPECTED_VIDEO_BOOKS_JSON = '{"Eric Evans - Domain-Driven Design - 20.99":{"author":"Eric Evans","title":"Domain-Driven Design","issueDate":"August 2003","description":"This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...","price":20.99}}';
        const booksJSON = await bookFormattingService.getFormattedBooks(bookJSONFormatter);
        const audioBooksJSON = await audioBookFormattingService.getFormattedBooks(bookJSONFormatter);
        const videoBooksJSON = await videoBookFormattingService.getFormattedBooks(bookJSONFormatter);
        assert.equal(booksJSON, EXPECTED_BOOKS_JSON);
        assert.equal(audioBooksJSON, EXPECTED_AUDIO_BOOKS_JSON);
        assert.equal(videoBooksJSON, EXPECTED_VIDEO_BOOKS_JSON);
    });
});
