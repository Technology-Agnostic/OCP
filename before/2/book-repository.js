class BookRepository {
    constructor(bookFactory) {
        this.bookFactory = bookFactory;
        this.booksStorageUrl = 'example://api.books-storage/books';
    }

    async getBooks() {
        const booksData = await fetch(this.booksStorageUrl);
        const books = booksData.map(this.bookFactory.createBook);
        return books;
    }
}

module.exports = BookRepository;