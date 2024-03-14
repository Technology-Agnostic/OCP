class BookJSONReportingService {
    constructor(bookFormatter) {
        this.bookFormatter = bookFormatter;
    }

    async getJSONBooksReport(books) {
        // DO SMTH...
        return this.bookFormatter.format('json', books);
    }
}

module.exports = BookJSONReportingService;
