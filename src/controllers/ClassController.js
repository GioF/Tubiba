const ClassRoom = require('../models/Class');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { descriptor, subject, number } = req.body;
        const { _id } = req.headers;
        
        const user = await User.findById(_id);

        if(!user){
            return res.status(400).json({error: 'User does not exist on the database'});
        }

        const classroom = await ClassRoom.create({
            teacher: _id,
            descriptor,
            subject,
            number
        })

        return res.json(classroom);

    },

    async index(req, res){
        const { _id } = req.headers;

        const user = await User.findById(_id);

        if(user.type==='Professor'){
            classes = await ClassRoom.find({teacher: _id});
            console.log(classes);
            return res.json(classes);
        }else{
            user.populate('classes');
            return res.json(user.classes);
        }
    },

    async show(req, res){
        const { _id } = req.params;

        const classroom = await ClassRoom.findById(id).populate('exercises');

        return res.json(classroom);
    },

    async add(req, res){
        const {_id} = req.headers;
        const { number } = req.body;

        const classroom = await ClassRoom.find({number});

        const user = await User.findById(_id);

        User.updateOne({
            "_id": _id
        }, {
            "$push": {
                "classes": classroom
            }
        }).catch(error => console.log("TODO: adicionar mensagens de erro" + error));
        return res.json(user);

    }

}