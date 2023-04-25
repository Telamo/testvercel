const  express = require('express')
const { signUp, logIn } = require('../controllers/authController')
const authRoute = express.Router()


// đăng ký
authRoute.post('/signUp', signUp)

// đăng nhập
authRoute.post('/login', logIn)



module.exports = {
    authRoute
}