const Assignment = require('../models/Exercise');
const User = require('../models/User');
const Class = require('../models/Class');

module.exports = {
    async index(req, res){
        const { classId } = req.params;

        const { showAll } = req.query;

        const { userId } = req.headers;

        const user = await User.findById(userId);

        const assignments = null;

        if(user.type=='student' && showAll==false){
            assignments = await Assignment.find({ remaining: userId});
        } else {
            assignments = await Class.findById(classId).populate('exercises').then(data => data.exercises);
        }

        return assignments;
    },

    async store(req, res){
        const { userId } = req.headers;

        const { classId } = req.params;

        const classroom = Class.findById(classId);

        if(userId && classroom.teacher==userId){
            const {
                trimester,
                title,
                question,
                options,
                correctAnswer,
                date,
                type,
            } = req.body;

            return res.json(await Assignment.create({
                trimester, 
                title, 
                question,
                options,
                correctAnswer,
                date,
                type,
            })
            );
        }
    }

}