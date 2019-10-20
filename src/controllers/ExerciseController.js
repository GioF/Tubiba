const Assignment = require('../models/Exercise');
const User = require('../models/User');
const Class = require('../models/Class');

module.exports = {
    async index(req, res){
        const { classId } = req.params;

        const { showAll } = req.query;

        const { userid } = req.headers;

        const user = await User.findById(userid);

        const assignments = null;

        if(user.type=='student' && showAll==false){
            assignments = await Assignment.find({ remaining: userid});
        } else {
            assignments = await Class.findById(classId).populate('exercises').then(data => data.exercises);
        }

        return res.json(assignments);
    },

    async store(req, res){                                          //TODO: refatorar essa função
        const { userid } = req.headers;

        const { classId } = req.params;

        classroom = await Class.findById(classId);
        
        const user = User.findById(userid);

        if(user && classroom.teacher.equals(userid)){
            const {
                trimester,
                title,
                question,
                options,
                correctAnswer,
                date,
                type,
            } = req.body;

            const assignment = await Assignment.create({
                trimester, 
                title, 
                question,
                options,
                correctAnswer,
                date,
                type,
            })

            Class.findOneAndUpdate({_id: classId}, {$push: assignment});

            return res.json(assignment);
            
        } else {
            return res.json({
                TODO: "adicionar mensagens de erro"
            });
        }
    }

}