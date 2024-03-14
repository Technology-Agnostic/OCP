const assert = require('node:assert');

const BOOKS = require('./books.mock');
const BookFormatter = require('./book-formatter');
const BookCSVReportingService = require('./book-csv-reporting.service');

describe('BookCSVReportingService', () => {
    const bookFormatter = new BookFormatter();
    const bookCSVReportingService = new BookCSVReportingService(bookFormatter);

    it('getCSVBooksReport should return list of books in CSV format', async () => {
        const EXPECTED_BOOKS_CSV = `data:text/csv;charset=utf-8,Alex Korb,The Upward Spiral,March 2015,A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an "upward spiral" out of depression,13.99
Eric Evans,Domain-Driven Design,August 2003,This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...,20.99
Fyodor Dostoevsky,Crime and Punishment,1866,Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...,23.5
`;
        const booksCSV = await bookCSVReportingService.getCSVBooksReport(BOOKS);
        assert.equal(booksCSV, EXPECTED_BOOKS_CSV);
    });
});
