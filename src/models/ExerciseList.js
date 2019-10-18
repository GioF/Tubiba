const mongoose = require('mongoose');

const ExerciseListSchema = new mongoose.Schema({
    exercises: {
        exercise: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise'
        },
        grade: Number,
        obervation: String
    },
    grade: Number,
    obervation: String
});

module.exports = mongoose.model('ExerciseList', ExerciseListSchema);