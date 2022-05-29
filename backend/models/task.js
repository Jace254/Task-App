const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the  task schema
const taskSchema = new Schema({
    author: {
        type: String,
        required: true,
        ref: "user"
    },
    project: {
        type: String,
        required: true,
        ref: "project"
    },
    category: {
        type: String,
        required: true,
        ref: "category"
    },
    name: {
        type: String,
        required: [true, 'Task name is required']
    },
    duration: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true,
        default: 'Not Started'
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('task', taskSchema);