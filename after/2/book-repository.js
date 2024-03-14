class BookRepository {
    constructor(bookFactory, booksStorageUrl) {
        this.bookFactory = bookFactory;
        this.booksStorageUrl = booksStorageUrl;
    }

    async getBooks() {
        const booksData = await fetch(this.booksStorageUrl);
        const books = booksData.map(this.bookFactory.createBook);
        return books;
    }
}

module.exports = BookRepository;