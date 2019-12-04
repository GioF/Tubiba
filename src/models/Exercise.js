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
    title: String,
    question: String,
    options: [String],
    correctAnswer: Number,
    type: [String],
    completedAssignments: [CompletedAssignmentSchema]
})

module.exports = mongoose.model('Assignment', AssignmentSchema);