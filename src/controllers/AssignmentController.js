const Assignment = require('../models/Exercise');
const User = require('../models/User');
const Classroom = require('../models/Class');

module.exports = {
    async index(req, res){
        const { userId } = req.headers;

        const { classId, assignmentId } = req.params;

        const user = await User.findById(userId);
        const classroom = await Classroom.findById(classId);
        
        if(user.classes.contains(classId) || classroom.teacher == userId){
            return await res.json(Assignment.findById(assignmentId));
        } else {
            return res.json({TODO: 'add error messages'})
        }

    },

    async store(req, res){
        const { userId } = req.headers;

        const { classId, assignmentId } = req.params;


        const user = await User.findById(userId);
        const classroom = await Classroom.findById(classId);
        const assignment = await Assignment.findById(assignmentId);

        if(user && classroom.teacher==user){                                        //checks if the user is the class teacher
            const {
                observation,
                studentId
            } = req.body;

            const ratedAssignment = await Assignment.updateOne(                     //updates the assignment with 
                {_id: assignmentId, "completedAssignments.student": studentId},     //the data filled by the teacher
                { $set: {
                    "completedAssignments.$.observation": observation,
                    "completedAssignments.$.grade": grade,
                    "completedAssignments.$.verified": true                
                }}
            );

            return res.json(ratedAssignment);

        } else if (user){                                                           //if it isn't a teacher, treat 
            const {                                                                 //them as a student
                answer, 
                justificative
            } = req.body;

            const completedAssignment = {
                student: user,
                answer,
                justificative,
                observation: null,
                verified: false
            };

            assignment.completedAssignments.push(completedAssignment);
            assignment.save(done);
            return res.json(completedAssignment);

        } else {
            return res.json({TODO: 'add error messages'});
        }

        
    }
}