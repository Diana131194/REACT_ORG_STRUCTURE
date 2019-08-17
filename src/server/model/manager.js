let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let managerSchema = new Schema({
    first_name: String,
    last_name: String,
    position: String,
    manager: {first_name: String, last_name: String},
    subordinates: [{
        first_name: String,
        last_name: String,
        position: String
    }]
});

module.exports = mongoose.model('ManagerModel', managerSchema);