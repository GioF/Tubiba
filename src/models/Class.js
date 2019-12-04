const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    descriptor: String,
    subject: String,
    number: String,
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment'
    }]
})

module.exports = mongoose.model('Class', ClassSchema);