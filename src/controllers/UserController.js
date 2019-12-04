const User = require('../models/User');

module.exports = {
    async store (req, res){
        console.log(req.body);
        const {
            username,
            email,
            password, 
            type } = req.body;

        let user = await User.findOne({email});
        
        //TODO: salvar senhas em hash e não plaintext

        if(!user){
            user = await User.create({
                username, 
                email, 
                password, 
                type
            })
        }

        return res.json(user._id);
    },

    async index (req, res){
        const {
            userid
        } = req.headers;

        let user = await User.findById(userid);

        return res.json(user.type);

    }

};