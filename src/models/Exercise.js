const mongoose = require('mongoose');

const CompletedAssignmentSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    answer: Number,
    justificative: String,
    observation: String,
    verified: Boolean
})

const AssignmentSchema = new mongoose.Schema({
    trimester: Number,
    title: String,
    question: String,
    options: [String],
    correctAnswer: Number,
    date: String,
    type: [String],
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    completedAssignments: [CompletedAssignmentSchema]
})

module.exports = mongoose.model('Assignment', AssignmentSchema);