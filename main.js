// const FileFormatter = require('./before/file-formatter');
const FileFormatter = require('./after/file-formatter');
const JSONFormatter = require('./after/json-formatter');
const CSVFormatter = require('./after/csv-formatter');

// const DataFormatter = require('./before/data-formatter');
// const FileFormatterComposition = require('./before/file-formatter-composition');

const FileFormatterComposition = require('./after/file-formatter-composition');
const CSVFileFormatter = require('./after/csv-file-formatter');

const fileFormatter = new FileFormatter();
const csvFormatter = new CSVFormatter();
const jsonFormatter = new JSONFormatter();

// const dataFormatter = new DataFormatter();
// const fileFormatterComposition = new FileFormatterComposition(dataFormatter);

const csvFormatterComposition = new FileFormatterComposition(csvFormatter);
const csvFileFormatter = new CSVFileFormatter();

// fileFormatter.format('D:/READ_FILE_PATH.EXT', 'D:/WRITE_FILE_PATH.EXT', 'json');
fileFormatter.format('D:/READ_FILE_PATH.EXT', 'D:/WRITE_FILE_PATH.EXT', jsonFormatter);
// fileFormatter.format('D:/READ_FILE_PATH.EXT', 'D:/WRITE_FILE_PATH.EXT', csvFormatter);
console.log('==============================');
// csvFormatterComposition.format('D:/READ_FILE_PATH.EXT', 'D:/WRITE_FILE_PATH.EXT');
csvFileFormatter.formatFile('D:/READ_FILE_PATH.EXT', 'D:/WRITE_FILE_PATH.EXT');
