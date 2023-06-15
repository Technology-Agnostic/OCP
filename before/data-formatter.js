class DataFormatter {
    format(type, data) {
        switch(type) {
            case 'json':
                const json = this.formatToJSON(data);
                return json;
            case 'csv':
                const csv = this.formatToCSV(data);
                return csv;
            case 'jpeg':
                const jpeg = this.formatToJPEG(data);
                return jpeg;
        }
        return '';
    }

    formatToJSON(data) {
        // do smth
        console.log('formatted to json', data);
        return data;
    }

    formatToCSV(data) {
        // do smth
        console.log('formatted to csv', data);
        return data;
    }

    formatToJPEG(data) {
        // do smth
        console.log('formatted to jpeg', data);
        return data;
    }
}

module.exports = DataFormatter;
