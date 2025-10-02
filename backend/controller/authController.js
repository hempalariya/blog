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
    try {
        const {email, password} = req.body
        const user = await User.find({email, password})
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}     