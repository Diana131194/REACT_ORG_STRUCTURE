let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({
    first_name: String,
    last_name: String,
    task_text: String,
    task_dueDate: String,
    task_creationDate: Date

});

module.exports = mongoose.model('TaskModel', taskSchema);