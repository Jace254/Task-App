const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username field is required'],
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
        minlength: 8
    },
    profession: {
        type: [],
        default: null   
    },
    avatar: {
        type: String
    }
},{
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);