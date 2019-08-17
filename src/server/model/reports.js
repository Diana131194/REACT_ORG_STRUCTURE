let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let reportSchema = new Schema({
    first_name: String,
    last_name: String,
    manager: {
        first_name: String,
        last_name: String
    },
    report_text: String,
    report_date: Date
});

module.exports = mongoose.model('ReportModel', reportSchema);