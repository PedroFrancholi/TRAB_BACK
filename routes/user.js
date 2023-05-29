const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {saveUser} = require("../database/user");

router.post("/registerUser", async (req,res)=>{
    
    const hashedPassword = bcrypt.hashSync(req.body.password,10);

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    }
    const savedUser = await saveUser(user);
    delete savedUser.password;
    res.status(201).json({
        user: savedUser
    })
})

//FAZER POST PARA O CADASTRO DE USERS

module.exports = {
    router
};
