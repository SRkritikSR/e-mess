const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    mess: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    // Generic reference field that can refer to either a User or an Employee
    author: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'authorType', // Reference path based on authorType field
        required: true,
    },
    // Field to specify the type of the author (either 'User' or 'Employee')
    authorType: {
        type: String,
        enum: ['user', 'employee'],
        required: true,
    },
})

module.exports = comment = mongoose.model('comment', CommentSchema);