const Assignment = require('../models/Exercise');
const User = require('../models/User');
const Class = require('../models/Class');

module.exports = {
    async index(req, res) {
        const {
            classId
        } = req.params;
        
        const {
            _id
        } = req.headers;

        const user = await User.findById(_id);

        const classroom = await Class.findById(classId);

        if (user && user.type == 'student') {                                   //TODO: logic to return only undone assignments
            classroom.populate('exercises')                                     //if user wishes to
                .execPopulate()
                .then(data => {
                    return res.json(data.exercises)
                })
                .catch(console.log);

        } else
        if (user && classroom.teacher.equals(_id)) {
            classroom.populate('exercises')
                .execPopulate()
                .then(data => {
                    return (res.json(data.exercises))
                })
                .catch(console.log);
        } else {
            return res.status(400).json({
                error: "Unauthorized user"
            });
        }
    },

    async store(req, res) {                                                     //TODO: refactor this function for clarity
        const {
            _id
        } = req.headers;

        const {
            classId
        } = req.params;

        classroom = await Class.findById(classId).populate('exercises');

        const user = User.findById(_id);

        if (user && classroom.teacher.equals(_id)) {

            const {
                title,
                question,
                options,
                correctAnswer,
                type,
            } = req.body;

            const assignment = await Assignment.create({
                title,
                question,
                options,
                correctAnswer,
                type,
            })

            //add assignment to class list of exercises

            Class.updateOne({
                "_id": classId
            }, {
                "$push": {
                    "exercises": assignment._id
                }
            }).catch(error => console.log("TODO: adicionar mensagens de erro" + error));
            return res.json(assignment);

        } else {
            return res.status(400).json({
                error: "Unauthorized user"
            });
        }
    }

}