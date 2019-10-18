const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    trimester: Number,
    title: String,
    question: String,
    options: [String],
    date: Date,
    type: String,
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
})

module.exports = mongoose.model('Assignment', AssignmentSchema);