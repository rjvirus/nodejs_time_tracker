const mongoose = require('mongoose');

const taskTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    createdOn: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('tasks', taskTemplate);