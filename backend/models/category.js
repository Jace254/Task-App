const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the  category schema
const categorySchema = new Schema({
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
    name: {
        type: String,
        required: [true, 'Category name is required']
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

module.exports = mongoose.model('category', categorySchema);