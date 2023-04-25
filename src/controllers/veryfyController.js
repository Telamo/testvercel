
const { verifyToken } = require('../config/jwt')

const checkToken = (req, res, next) => {
    try {
        let { token } = req.headers
        if (verifyToken(token)) {
            next()
        }
    }
    catch (err) {
        res.status(401).send(err)
    }
}

module.exports = checkToken