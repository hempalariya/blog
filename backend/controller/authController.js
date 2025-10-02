import User from '../models/User.js'

export async function registerUser (req, res){
    try {
        const {username, email, password} = req.body
        const newUser = await User.create({
            username,
            email,
            password
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function loginUser (req,res){
    
}