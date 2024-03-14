class BookCSVReportingService {
    constructor(bookFormatter) {
        this.bookFormatter = bookFormatter;
    }

    async getCSVBooksReport(books) {
        // DO SMTH...
        return this.bookFormatter.format('csv', books);
    }
}

module.exports = BookCSVReportingService;
