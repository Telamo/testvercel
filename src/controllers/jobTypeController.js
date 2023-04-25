
const { Sequelize, where } = require('sequelize')
const sequelize = require('../models/index')
const initModels = require('../models/init-models')
const { successCode, errorCode, failCode } = require('../config/response')
const { decodeToken } = require('../config/jwt')
const model = initModels(sequelize)

const getListJobType = async (req, res) => {
    try {
        let jobType = await model.LoaiCongViec.findAll()
        successCode(res, jobType, "Lấy thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const postJobType = async (req, res) => {
    try {
        let { token } = req.headers
        let { ten_loai_cong_viec } = req.body
        let role = decodeToken(token).data.role
        if (role == "ADMIN") {
            let newJobType = await model.LoaiCongViec.create({ ten_loai_cong_viec })
            successCode(res, newJobType, "Thêm thành công!")
        } else {
            failCode(res, "", "User không phải quyền ADMIN!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const pagingSearchJobType = async (req, res) => {
    try {
        let { pageIndex, pageSize, keyword } = req.query
        pageIndex = parseInt(pageIndex)
        pageSize = parseInt(pageSize)
        let data = await model.LoaiCongViec.findAll({
            where: {
                ten_loai_cong_viec: {
                    [Op.like]: `%${keyword}%`
                }
            },
            limit: pageSize,
            offset: (pageIndex - 1) * pageSize
        })
        successCode(res, { pageIndex, pageSize, keyword, data })
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const getJobTypeById = async (req, res) => {
    try {
        let { id_loai_cong_viec } = req.params
        let jobType = await model.LoaiCongViec.findByPk(id_loai_cong_viec)
        if (jobType) {
            successCode(res, jobType, "Lấy thành công!")
        } else {
            failCode(res, "", "Không tìm thấy id loại công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const updateJobType = async (req, res) => {
    try {
        let { token } = req.headers
        let role = decodeToken(token).data.role
        let { id_loai_cong_viec } = req.params
        let { ten_loai_cong_viec } = req.body
        let modelJobType = {
            id_loai_cong_viec,
            ten_loai_cong_viec
        }
        let jobType = await model.LoaiCongViec.findByPk(id_loai_cong_viec)
        if (jobType) {
            if (role == "ADMIN") {
                await model.LoaiCongViec.update(modelJobType, {
                    where: { id_loai_cong_viec }
                })
                successCode(res, modelJobType, "Cập nhật thành công!")
            } else {
                failCode(res, "", "User không phải quyền ADMIN!")
            }
        } else {
            failCode(res, "", "không tìm thấy id loại công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const deleteJobType = async (req, res) => {
    try {
        let { token } = req.headers
        let role = decodeToken(token).data.role
        let { id_loai_cong_viec } = req.params
        let jobType = await model.LoaiCongViec.findByPk(id_loai_cong_viec)
        if (jobType) {
            if (role == "ADMIN") {
                await model.LoaiCongViec.destroy({ where: { id_loai_cong_viec } })
                successCode(res, jobType, "Xóa thành công!")
            } else {
                failCode(res, "", "User không phải quyền ADMIN!")
            }
        } else {
            failCode(res, "", "Không tìm thấy id loại công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

module.exports = {
    getListJobType,
    postJobType,
    pagingSearchJobType,
    getJobTypeById,
    updateJobType,
    deleteJobType
}