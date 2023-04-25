
const { Sequelize, where } = require('sequelize')
const { decodeToken } = require('../config/jwt')
const { successCode, errorCode, failCode } = require('../config/response')
const sequelize = require('../models/index')
const initModels = require('../models/init-models')
const model = initModels(sequelize)
const Op = Sequelize.Op

const getJobTypeDetail = async (req, res) => {
    try {
        let data = await model.ChiTietLoaiCongViec.findAll({
            include: ["id_loai_cong_viec_LoaiCongViec"]
        })
        successCode(res, data, "lấy danh sách thành công!")

    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const postJobTypeDetail = async (req, res) => {
    try {
        let { token } = req.headers
        let { role } = decodeToken(token).data
        let { ten_chi_tiet, id_loai_cong_viec } = req.body
        let jobTypeDetai = await model.LoaiCongViec.findByPk(id_loai_cong_viec)
        if (!jobTypeDetai) {
            failCode(res, "Không tìm thấy id loại công việc!")
            return
        }
        let modelJobTypeDetail = {
            ten_chi_tiet,
            id_loai_cong_viec,
            hinh_anh: ""
        }
        if (role == "ADMIN") {
            await model.ChiTietLoaiCongViec.create(modelJobTypeDetail)
            successCode(res, modelJobTypeDetail, "Thêm thành công!")
        } else {
            failCode(res, "", "User không có quyền!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const pagingSearchJobTypeDetail = async (req, res) => {
    try {
        let { pageIndex, pageSize, keyword } = req.query
        pageIndex = parseInt(pageIndex) // Chuyển đổi sang kiểu số nguyên
        pageSize = parseInt(pageSize) 

        let data = await model.ChiTietLoaiCongViec.findAll({
            where: {
                ten_chi_tiet: {
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


const JobTypeDetailById = async (req, res) => {
    try {
        let { id_chi_tiet_loai_cong_viec } = req.params
        let jobTypeDetail = await model.ChiTietLoaiCongViec.findByPk(id_chi_tiet_loai_cong_viec)
        if (jobTypeDetail) {
            successCode(res, jobTypeDetail, "Lấy thành công!")
        } else {
            failCode(res, "", "Không tìm thấy id!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const updateJobTypeDetail = async (req, res) => {
    try {
        let { token } = req.headers
        let { role } = decodeToken(token).data
        let { id_chi_tiet_loai_cong_viec } = req.params
        let { ten_chi_tiet } = req.body
        let jobTypeDetai = {
            id_chi_tiet_loai_cong_viec,
            ten_chi_tiet,
        }
        if (role == "ADMIN") {
            await model.ChiTietLoaiCongViec.update({ ten_chi_tiet }, {
                where: { id_chi_tiet_loai_cong_viec }
            })
            successCode(res, jobTypeDetai, "Cập nhật thành công!")
        } else {
            failCode(res, "", "User không có quyền!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const deleteJobTypeDetail = async (req, res) => {
    try {
        let { token } = req.headers
        let { role } = decodeToken(token).data
        let { id_chi_tiet_loai_cong_viec } = req.params
        let jobTypeDetail = await model.ChiTietLoaiCongViec.findByPk(id_chi_tiet_loai_cong_viec)
        if (jobTypeDetail) {
            if (role == "ADMIN") {
                await model.ChiTietLoaiCongViec.destroy({ where: { id_chi_tiet_loai_cong_viec } })
                successCode(res, jobTypeDetail, "Xóa thành công!")
            } else {
                failCode(res, "User không có quyền!")
            }
        } else {
            failCode(res, "Không tìm thấy id")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const uploadImageJobTypeDetail = async (req, res) => {
    try {
        let { token } = req.headers
        let { role } = decodeToken(token).data
        let { id_chi_tiet_loai_cong_viec } = req.params
        let file = req.file
        let hinh_anh = `${req.protocol}://${req.get('host')}/public/img/${file.filename}`
        let jobTypeDetail = await model.ChiTietLoaiCongViec.findByPk(id_chi_tiet_loai_cong_viec)
        if (jobTypeDetail) {
            if (role == "ADMIN") {
                await model.ChiTietLoaiCongViec.update({ hinh_anh }, {
                    where: { id_chi_tiet_loai_cong_viec }
                })
                successCode(res, hinh_anh, "Upload thành công!")
            } else {
                failCode(res, "", "User không có quyền")
            }
        } else {
            failCode(res, "", "Không tìm thấy id")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}




module.exports = {
    getJobTypeDetail,
    postJobTypeDetail,
    JobTypeDetailById,
    updateJobTypeDetail,
    deleteJobTypeDetail,
    uploadImageJobTypeDetail,
    pagingSearchJobTypeDetail
}