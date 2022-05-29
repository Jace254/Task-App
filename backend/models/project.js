const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the  project schema
const projectSchema = new Schema({
    author: {
        type: String,
        required: true,
        ref: "user"
    },
    name: {
        type: String,
        required: [true, 'Project name is required']
    },
    color: {
        type: String,
        default: 'gray'
    },
    image: {
        type: String,
        default: null
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('project', projectSchema);