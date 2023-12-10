const User = require('../model/userModel')
const bcryptjs = require('bcryptjs')


// POST request for user
const createUser = async (req, res) => {

    const { username, email, password} = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)

    try{

        const user = await User.create({username, email, password: hashedPassword})
        res.status(201).json({
            message: 'User created successfully',
            user: user
        })

        if(!user){
            res.status(500).json({
                error: err
            })
        }
    }catch(error){
        res.status(500).json(error.message )
    }

}


module.exports = {
    createUser,

}