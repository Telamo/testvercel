// yarn add jsonwebtoken

const jwt = require('jsonwebtoken')

const generateToken = (data) => {
    let token = jwt.sign(data, "private", {expiresIn: '1000m'})
    return token
}

const verifyToken = (token) => {
    let checkToken = jwt.verify(token, "private")
    return checkToken
}

const decodeToken = (token) => {
    let decode = jwt.decode(token)
    return decode
}
 
module.exports = {
    generateToken,
    verifyToken,
    decodeToken
}
