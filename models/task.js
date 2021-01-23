const mongoose = require('mongoose');

const taskTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('tasks', taskTemplate);