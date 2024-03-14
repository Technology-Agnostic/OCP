class BookXMLReportingService {
    constructor(bookFormatter) {
        this.bookFormatter = bookFormatter;
    }

    async getXMLBooksReport(books) {
        // DO SMTH...
        return this.bookFormatter.format('xml', books);
    }
}

module.exports = BookXMLReportingService;
