
const sequelize = require('../models/index')
const initModels = require('../models/init-models')
const bcrypt = require('bcrypt')
const { generateToken } = require('../config/jwt')
const model = initModels(sequelize)
const { successCode, failCode, errorCode } = require('../config/response')


const signUp = async (req, res) => {
    try {
        let { email, name, pass_word, phone, birth_day, gender, skill, certification } = req.body
        let modelUser = {
            name,
            email,
            pass_word: bcrypt.hashSync(pass_word, 10),
            phone,
            birth_day,
            gender,
            role: "user",
            skill,
            certification
        }
        let checkEmail = await model.NguoiDung.findOne({
            where: { email }
        })
        if (checkEmail) {
            failCode(res, modelUser, "Email đã tồn tại!")
        } else {
            await model.NguoiDung.create(modelUser)
            successCode(res, modelUser, "Đăng ký thành công!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }

}


const logIn = async (req, res) => {
    try {
        let { email, pass_word } = req.body
        let checkEmail = await model.NguoiDung.findOne({
            where: { email }
        })
        if (checkEmail) {
            let checkPass = bcrypt.compareSync(pass_word, checkEmail.pass_word)
            if (checkPass) {
                let token = generateToken({ data: { ...checkEmail.dataValues, pass_word: "" } })
                successCode(res, { infoUser: { ...checkEmail.dataValues, pass_word: "" }, token }, "Login thành công!")
            } else {
                failCode(res, "", "Mật khẩu không chính xác!")
            }
        } else {
            failCode(res, "", "Email không đúng!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


module.exports = {
    signUp,
    logIn
}