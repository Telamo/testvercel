
const { Sequelize, where } = require('sequelize')
const { decodeToken } = require('../config/jwt')
const { successCode, errorCode, failCode } = require('../config/response')
const sequelize = require('../models/index')
const initModels = require('../models/init-models')
const model = initModels(sequelize)


const getComment = async (req, res) => {
    try {
        let comment = await model.BinhLuan.findAll()
        successCode(res, comment, "Lấy danh sách thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const postComment = async (req, res) => {
    try {
        let { token } = req.headers
        let id_nguoi_binh_luan = decodeToken(token).data.id_nguoi_dung
        let { id_cong_viec, noi_dung, sao_binh_luan } = req.body
        let job = await model.CongViec.findByPk(id_cong_viec)
        if (!job) {
            failCode(res, "Không tìm thấy id công việc!")
            return
        }
        let ngay_binh_luan = new Date()
        let modelComment = {
            id_cong_viec,
            id_nguoi_binh_luan,
            ngay_binh_luan,
            noi_dung,
            sao_binh_luan
        }
        let comment = await model.BinhLuan.create(modelComment)
        successCode(res, comment, "Thêm bình luận thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const getCommentById = async (req, res) => {
    try {
        let { id_cong_viec } = req.params
        let jobInfo = await model.CongViec.findByPk(id_cong_viec)
        if (!jobInfo) {
            failCode(res, "Không tìm thấy id công việc!")
            return
        }
        let comments = await model.BinhLuan.findAll({
            include: [{
                model: model.NguoiDung,
                as: "id_nguoi_binh_luan_NguoiDung",
                attributes: ["name", "avatar"]
            }],
            where: { id_cong_viec },
            attributes: ["ngay_binh_luan", "noi_dung", "sao_binh_luan"]
        })
        if (comments.length > 0) {
            // Format the comment objects to include the desired fields only
            const formattedComments = comments.map(comment => {
                const { ngay_binh_luan, noi_dung, sao_binh_luan } = comment
                const { name: ten_nguoi_binh_luan, avatar } = comment.id_nguoi_binh_luan_NguoiDung
                return { ngay_binh_luan, noi_dung, sao_binh_luan, ten_nguoi_binh_luan, avatar }
            })
            successCode(res, formattedComments, "Lấy danh sách bình luận thành công!")
        } else {
            failCode(res, "không tìm thấy bình luận nào!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const putComment = async (req, res) => {
    try {
        let { token } = req.headers
        let id_nguoi_dung = decodeToken(token).data.id_nguoi_dung
        let { id_binh_luan } = req.params
        let { id_cong_viec, noi_dung, sao_binh_luan } = req.body
        let jobInfo = await model.CongViec.findByPk(id_cong_viec)
        if (!jobInfo) {
            failCode(res, "Không tìm thấy id công việc")
            return
        }
        let ngay_binh_luan = new Date()

        let comment = await model.BinhLuan.findOne({ where: { id_binh_luan } })
        if (comment) {
            let id_nguoi_binh_luan = comment.id_nguoi_binh_luan
            let modelComment = {
                id_binh_luan,
                id_cong_viec,
                id_nguoi_binh_luan,
                ngay_binh_luan,
                noi_dung,
                sao_binh_luan
            }
            if (id_nguoi_dung == id_nguoi_binh_luan) {
                await model.BinhLuan.update(modelComment, {
                    where: { id_binh_luan }
                })
                successCode(res, modelComment, "Sửa bình luận thành công!")
            } else {
                failCode(res, "", "User không có quyền sửa bình luận!")
            }
        } else {
            failCode(res, "", "Không tìm thấy bình luận!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const deleteComment = async (req, res) => {
    try {
        let { id_binh_luan } = req.params
        let { token } = req.headers
        let role = decodeToken(token).data.role
        let {id_nguoi_dung} = decodeToken(token).data
        let comment = await model.BinhLuan.findOne({ where: { id_binh_luan } })
        if(comment) {
            if (role == "ADMIN" || id_nguoi_dung == comment.id_nguoi_binh_luan) {
                await model.BinhLuan.destroy({
                    where: { id_binh_luan }
                })
                successCode(res, comment, "Xóa bình luận thành công!")
            } else {
                failCode(res, "", "User không có quyền!")
            }
        } else {
            failCode(res, "", "Không tìm thấy bình luận!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}
module.exports = {
    getComment,
    postComment,
    getCommentById,
    deleteComment,
    putComment
}