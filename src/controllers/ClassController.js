const ClassRoom = require('../models/Class');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { subject } = req.body;
        const { userid } = req.headers;
        
        const user = await User.findById(userid);

        if(!user){
            return res.status(400).json({error: 'User does not exist on the database'});
        }

        const classroom = await ClassRoom.create({
            teacher: userid,
            subject,
        })

        return res.json(classroom);

    }


}