const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: String,
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment'
    }]
})

module.exports = mongoose.model('Class', ClassSchema);