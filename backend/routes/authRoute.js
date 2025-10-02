import { registerUser, loginUser } from '../controller/authController.js'
import express from 'express'
const authRouter = express.Router()

authRouter.post('/register', registerUser)


export default authRouter

