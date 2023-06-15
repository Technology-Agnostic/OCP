const DataFormatter = require('./data-formatter');

class FileFormatter extends DataFormatter {
    format(readFilePath, writeFilePath, type) {
        const fileContent = this.readFile(readFilePath);
        const formattedContent = super.format(type, fileContent);
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

module.exports = FileFormatter;
