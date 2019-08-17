let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let employeeSchema = new Schema({
    first_name: String,
    last_name: String,
    position: String,
    manager: {first_name: String, last_name: String}
});

module.exports = mongoose.model('EmployeeModel', employeeSchema);
