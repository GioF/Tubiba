const ClassRoom = require('../models/Class');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { subject } = req.body;
        const { userId } = req.headers;

        const user = await User.findById(userId);

        if(!user){
            return res.status(400).json({error: 'User does not exist on the database'});
        }

        const classroom = await ClassRoom.create({
            user: userId,
            subject,
        })

        return res.json(classroom);

    }


}