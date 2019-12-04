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

        return res.json(user);
    },

    async type (req, res){
        const { _id } = req.headers;

        let user = await User.findById(_id);

        return res.json(user.type);

    },

    async select (req, res){
        const _email = req.body.email;
        const _password = req.body.password;

        let user = await User.findOne({email: _email, password: _password});

        console.log(user);
        
        if(user){
            return res.json(user._id);
        }else{
            return res.json(null);
        }
    }
    
};