const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskTrackingTemplate = Schema({
    taskId: Schema.Types.ObjectId,
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date
    }
})

module.exports = mongoose.model('tasks_trackings', taskTrackingTemplate);