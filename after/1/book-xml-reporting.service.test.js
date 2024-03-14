const assert = require('node:assert');

const BOOKS = require('./books.mock');
const BookXMLFormatter = require('./book-xml-formatter');

describe('BookXMLFormatter', () => {
    const bookXMLFormatter = new BookXMLFormatter();

    it('getReport should return list of books in XML format', async () => {
        const EXPECTED_BOOKS_XML = '<?xml version="1.0"?><author>Alex Korb</author><title>The Upward Spiral</title><issue-date>March 2015</issue-date><description>A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an "upward spiral" out of depression</description><price>13.99</price><author>Eric Evans</author><title>Domain-Driven Design</title><issue-date>August 2003</issue-date><description>This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...</description><price>20.99</price><author>Fyodor Dostoevsky</author><title>Crime and Punishment</title><issue-date>1866</issue-date><description>Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...</description><price>23.5</price>';
        const booksXML = await bookXMLFormatter.format(BOOKS)
        assert.equal(booksXML, EXPECTED_BOOKS_XML);
    });
});
