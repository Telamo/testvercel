
const { Sequelize, where } = require('sequelize')
const sequelize = require('../models/index')
const initModels = require('../models/init-models')
const bcrypt = require('bcrypt')
const { successCode, errorCode, failCode } = require('../config/response')
const { decodeToken } = require('../config/jwt')
const model = initModels(sequelize)
Op = Sequelize.Op

const getListUser = async (req, res) => {
    try {
        let listUser = await model.NguoiDung.findAll({
            attributes: { exclude: ["pass_word"] }
        })
        successCode(res, listUser, "Lấy danh sách thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const deleteUser = async (req, res) => {
    try {
        let { token } = req.headers
        let { id_nguoi_dung } = req.query
        id_nguoi_dung = parseInt(id_nguoi_dung)
        let role = decodeToken(token).data.role
        let user_id = decodeToken(token).data.id_nguoi_dung
        let user = await model.NguoiDung.findByPk(id_nguoi_dung, {
            attributes: { exclude: ['pass_word'] }
        })
        if (user) {
            if (id_nguoi_dung == user_id || role == "ADMIN") {
                await model.NguoiDung.destroy({
                    where: { id_nguoi_dung }
                })
                successCode(res, user, "Xóa thành công!")
            } else {
                failCode(res, "", "User không phải quyền ADMIN")
            }
        } else {
            failCode(res, "", "User không tồn tại!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const postUser = async (req, res) => {
    try {
        let { token } = req.headers
        let roleAdmin = decodeToken(token).data.role
        if (roleAdmin != "ADMIN") {
            failCode(res, "", "User không có quyền!")
            return
        }
        let { email, name, pass_word, phone, birth_day, gender, role, skill, certification } = req.body
        let modelUser = {
            name,
            email,
            pass_word: bcrypt.hashSync(pass_word, 10),
            phone,
            birth_day,
            gender,
            role,
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



const pagingSearchUser = async (req, res) => {
    try {
        let { pageIndex, pageSize, keyword } = req.query
        pageIndex = parseInt(pageIndex)
        pageSize = parseInt(pageSize)
        let data = await model.NguoiDung.findAll({
            where: {
                name: {
                    [Op.like]: `%${keyword}%`
                }
            },
            limit: pageSize,
            offset: (pageIndex - 1) * pageSize
        })
        successCode(res, data)
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const getUserById = async (req, res) => {
    try {
        let { id_nguoi_dung } = req.params
        let user = await model.NguoiDung.findByPk(id_nguoi_dung, {
            attributes: { exclude: ['pass_word'] }
        })
        if (user) {
            successCode(res, user, "Lấy thành công!")
        } else {
            failCode(res, "", "User không tồn tại!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "LỗiBE")
    }
}

const updateUserInfo = async (req, res) => {
    try {
        let { token } = req.headers
        let user_id = decodeToken(token).data.id_nguoi_dung
        let emailUser = decodeToken(token).data.email
        let { id_nguoi_dung } = req.params
        let { name, email, pass_word, phone, birth_day, gender, skill, certification } = req.body
        if(email!= emailUser) {
            let userInfo = await model.NguoiDung.findOne({
                where: { email }
            })
            if (userInfo) {
                failCode(res, "Email đã tồn tại!")
                return
            }
        }
        let modelUser = {
            id_nguoi_dung,
            name,
            email,
            pass_word: bcrypt.hashSync(pass_word, 10),
            phone,
            birth_day,
            gender,
            skill,
            certification
        }
        if (user_id == id_nguoi_dung) {
            await model.NguoiDung.update(modelUser, {
                where: { id_nguoi_dung }
            })
            successCode(res, modelUser, "Cập nhật thành công!")
        } else {
            failCode(res, "", "User không có quyền!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const searchUserByName = async (req, res) => {
    try {
        let { ten_nguoi_dung } = req.params
        let user = await model.NguoiDung.findAll({
            where: {
                name: {
                    [Op.like]: `%${ten_nguoi_dung}%`
                }
            },
            attributes: {
                exclude: ['pass_word']
            }
        }
        )
        if (user.length > 0) {
            successCode(res, user, "Lấy thành công!")
        } else {
            failCode(res, "", "Không tìm thấy tên user phù hợp!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const uploadAvatar = async (req, res) => {
    try {
        let file = req.file
        let newavatar = `${req.protocol}://${req.get('host')}/public/img/${file.filename}`
        let { token } = req.headers
        let { id_nguoi_dung } = decodeToken(token).data
        let userInfo = await model.NguoiDung.findByPk(id_nguoi_dung)
        userInfo.avatar = newavatar
        await userInfo.save()
        successCode(res, userInfo, "Upload thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

module.exports = {
    getListUser,
    deleteUser,
    pagingSearchUser,
    getUserById,
    updateUserInfo,
    searchUserByName,
    uploadAvatar,
    postUser
}