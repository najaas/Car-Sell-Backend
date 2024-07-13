const express =require('express')
const router = express.Router()

const {signupPost}=require('../controller/userController')

router.post('/signup', signupPost)

module.exports =router
