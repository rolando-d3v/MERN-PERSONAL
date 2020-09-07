const bcrypt = require('bcrypt');

const UserModel = require('../models/userModel');
const { query } = require('express');


//CREAR USUARIO 
exports.signUp = async (req, res, next)=> {

   try {
    const user = new UserModel(req.body)
 
    const {email, password, repeatPassword} = req.body
    user.email = email

    if(!password || !repeatPassword) {
        res.status(404).send({message: "los password son necesarios"})
    } else if(password !== repeatPassword) {
        res.status(404).json({message: "los password no coiciden"})
    } else {
        user.password = await bcrypt.hash(password, 10)
        await user.save()
        res.json({ message: "usuario created successfully" });
    }
   } catch (error) {
    if(error.code === 11000) {
        res.send({message: "el email ya existe", code: error.code})
     }  
     res.send(error) 
     next() 
   }
   
}


exports.getUsers = async (req, res, next)=> {
    try {
        let xpage = parseInt(req.query.xpage) 
        const user = await UserModel.find({}, {password: 0}).limit(xpage)
        res.json(user)        
    } catch (error) {
        res.send(error)
        next()
    }
}