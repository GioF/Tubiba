const User = require('../models/User');

module.exports = {
    async store (req, res){
        let aluno = new Aluno();
        const {
            username,
            email,
            password, 
            type } = req.body;

        let user = await User.findOne({email});

        if(!user){
            user = await User.create({
                username, 
                email, 
                password, 
                type
            })
        }

        return res.json(user);
    }




};