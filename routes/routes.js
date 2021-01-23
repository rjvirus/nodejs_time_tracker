const express = require('express');
const taskTemplateCopy = require('../models/task');
const taskTrackTemplateCopy = require('../models/task-track');
const router = express.Router();

router.post('/add', (req, res) => {
    const myTask = new taskTemplateCopy({
        name: req.body.name,
        description: req.body.description
    });
    myTask.save().then((data) => {
        const taskId = data._id;
        const task_track = new taskTrackTemplateCopy({
            taskId,
            startTime: req.body.startTime ?? Date.now(),
            endTime: req.body.endTime ?? null
        });
        const promises = [Promise.resolve(data)];
        promises.push(task_track.save());
        return Promise.all(promises)
    }).then((data) => {
        res.json({
            data: data[0],
            message: 'Saved Successfully'
        })
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/getAll', (req, res) => {
    taskTemplateCopy.find({}, function (err, tasks) {
        res.send(tasks);
    });
})

router.get('/task/tracks/:id', (req, res) => {
    taskTrackTemplateCopy.find({
        taskId: req.params.id
    }, (err, trackers) => {
        res.send(trackers);
    })
});

router.post('/task/action/:id/:action', (req, res) => {
    console.log(req.params.action, req.params.id);
    if (req.params.action === 'pause') {
        taskTrackTemplateCopy.findOneAndUpdate({ _id: req.params.id }, {
            endTime: Date.now()
        }, { new: true }).then((data) => {
            console.log(data);
            res.json({
                data,
                message: 'Updated Successfully'
            })
        }).catch((err) => {
            res.json(err);
        });
    } else if(req.params.action === 'resume') {
        var book1 = new taskTrackTemplateCopy({ 
            taskId: req.params.id, 
            startTime: Date.now(), 
            endTime: null 
        });
        book1.save().then(data => {
            res.json({
                data,
                message: 'Updated Successfully'
            })
        })
    }
});

module.exports = router;