const mongosse = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    type: String,
    classes : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }]
});

module.exports = mongoose.model('User', UserSchema);