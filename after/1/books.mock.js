const Book = require('./book');

const createBook = (bookData) => {
    const { author, title, issueDate, description, price } = bookData;
    return new Book(author, title, issueDate, description, price);
}

const BOOKS = [
    {
        author: 'Alex Korb',
        title: 'The Upward Spiral',
        issueDate: 'March 2015',
        description: 'A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an "upward spiral" out of depression',
        price: 13.99
    },
    {
        author: 'Eric Evans',
        title: 'Domain-Driven Design',
        issueDate: 'August 2003',
        description: 'This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...',
        price: 20.99
    },
    {
        author: 'Fyodor Dostoevsky',
        title: 'Crime and Punishment',
        issueDate: '1866',
        description: 'Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...',
        price: 23.50
    },
].map(createBook);

module.exports = BOOKS;
