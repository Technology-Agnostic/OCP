const CSVFormatter = require('./csv-formatter');

class CSVFileFormatter extends CSVFormatter {
    formatFile(readFilePath, writeFilePath) {
        const fileContent = this.readFile(readFilePath);
        const formattedContent = this.format(fileContent);
        this.writeFile(writeFilePath, formattedContent);
    }

    readFile(filePath) {
        // do smth
        console.log('read file', filePath);
        return 'some_data';
    }

    writeFile(filePath, content) {
        // do smth
        console.log('write file formatted content', content, filePath);
    }
}

module.exports = CSVFileFormatter;
