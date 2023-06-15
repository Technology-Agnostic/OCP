class FileFormatterComposition {
    constructor(dataFormatter) {
        this.dataFormatter = dataFormatter;
    }

    format(readFilePath, writeFilePath) {
        const fileContent = this.readFile(readFilePath);
        const formattedContent = this.dataFormatter.format(fileContent);
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

module.exports = FileFormatterComposition;
