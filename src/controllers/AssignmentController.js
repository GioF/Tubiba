const Assignment = require('../models/Exercise');
const User = require('../models/User');
const Class = require('../models/Class');

module.exports = {
    async store(req, res){
        const { userId } = req.headers;

        const { classId, assignmentId } = req.params;


        const user = await User.findById(userId);
        const classroom = await Class.findById(classId);
        const assignment = await Assignment.findById(assignmentId);

        if(user && classroom.teacher==user){
            const {
                observation,
                grade,
                studentId
            } = req.body;

            const ratedAssignment = await Assignment.updateOne(
                {_id: assignmentId, "completedAssignment.student": studentId},
                { $set: {
                    "completedAssignment.$.observation": observation,
                    "completedAssignment.$.grade": grade,
                    "completedAssignment.$.verified": true                
                }}
            );

            return res.json(ratedAssignment);

        } else if (user){
            const {
                answer, 
                justificative
            } = req.body;
            const completedAssignment = {
                student: user,
                answer,
                justificative,
                observation: null,
                verified: false,
                grade: null
            };

            assignment.completedAssignments.push(completedAssignment);
            assignment.save(done);
            return res.json(completedAssignment);

        }

    }
}