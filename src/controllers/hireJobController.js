
const { Sequelize, where } = require('sequelize')
const sequelize = require('../models/index')
const initModels = require('../models/init-models')
const { successCode, errorCode, failCode } = require('../config/response')
const { decodeToken } = require('../config/jwt')
const model = initModels(sequelize)


const getHireJob = async (req, res) => {
    try {
        let hireJob = await model.ThueCongViec.findAll()
        successCode(res, hireJob, "Lấy thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const postHireJob = async (req, res) => {
    try {
        let { token } = req.headers
        let id_nguoi_thue = decodeToken(token).data.id_nguoi_dung
        let { id_cong_viec } = req.body
        let ngay_thue = new Date()
        let hireJobModel = {
            id_cong_viec,
            id_nguoi_thue,
            ngay_thue,
            hoan_thanh: false
        }
        let jobInfo = await model.CongViec.findByPk(id_cong_viec)
        if (jobInfo) {
            let hireJob = await model.ThueCongViec.create(hireJobModel)
            successCode(res, hireJob, "Thêm thành công!")
        } else {
            failCode(res, "Không tìm thấy id công viêc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}



const getHireJobById = async (req, res) => {
    try {
        let { id_thue_cong_viec } = req.params
        let hireJob = await model.ThueCongViec.findByPk(id_thue_cong_viec)
        if (hireJob) {
            successCode(res, hireJob, "Lấy thành công!")
        } else {
            failCode(res, "", "Không tìm thấy id thuê công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const updateHireJob = async (req, res) => {
    try {
        let { token } = req.headers
        let { id_nguoi_dung } = decodeToken(token).data
        let { id_thue_cong_viec } = req.params
        let { id_cong_viec, hoan_thanh, ngay_thue } = req.body
        let job = await model.CongViec.findOne({
            where: { id_cong_viec }
        })

        if (!job) {
            failCode(res, "", "Id công việc không tồn tại")
            return
        }
        let hireJobModel = {
            id_thue_cong_viec,
            id_cong_viec,
            ngay_thue,
            hoan_thanh
        }
        let hireJob = await model.ThueCongViec.findByPk(id_thue_cong_viec)
        if (hireJob) {
            let { id_nguoi_thue } = hireJob
            if (id_nguoi_dung == id_nguoi_thue) {
                await model.ThueCongViec.update(hireJobModel, {
                    where: { id_thue_cong_viec }
                })
                successCode(res, hireJobModel, "Cập nhật thành công!")
            } else {
                failCode(res, "", "User không có quyền!")
            }
        } else {
            failCode(res, "", "Không tìm thấy Id thuê công việc")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const deleteHireJob = async (req, res) => {
    try {
        let { id_thue_cong_viec } = req.params
        let { token } = req.headers
        let { role, id_nguoi_dung } = decodeToken(token).data
        let hireJob = await model.ThueCongViec.findByPk(id_thue_cong_viec)
        if (hireJob) {
            if (id_nguoi_dung == hireJob.id_nguoi_thue || role == "ADMIN") {
                await model.ThueCongViec.destroy({ where: { id_thue_cong_viec } })
                successCode(res, hireJob, "Xóa thành công!")
            } else {
                failCode(res, "", "User không có quyền!")
            }
        } else {
            failCode(res, "", "Không tìm thấy id thuê công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const getListHireJob = async (req, res) => {
    try {
        let { token } = req.headers
        let id_nguoi_thue = decodeToken(token).data.id_nguoi_dung
        let listHireJob = await model.ThueCongViec.findAll({
            where: { id_nguoi_thue }
        })
        successCode(res, listHireJob, "Lấy thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const getListJobHired = async (req, res) => {
    try {
        let { token } = req.headers
        let { id_nguoi_dung } = decodeToken(token).data
        let listJob = await model.ThueCongViec.findAll({
            where: {
                id_nguoi_thue: id_nguoi_dung
            }
        })
        successCode(res, listJob, "Lấy thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const completeHireJob = async (req, res) => {
    try {
        let { id_thue_cong_viec } = req.params
        let hireJob = await model.ThueCongViec.findByPk(id_thue_cong_viec)
        if (hireJob) {
            await model.ThueCongViec.update({ hoan_thanh: true }, {
                where: { id_thue_cong_viec }
            })
            let compleJob = await model.ThueCongViec.findByPk(id_thue_cong_viec)
            successCode(res, compleJob)
        } else {
            failCode(res, "", "Không tìm thấy id thuê công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }

}


module.exports = {
    getHireJob,
    postHireJob,
    getHireJobById,
    updateHireJob,
    deleteHireJob,
    getListHireJob,
    getListJobHired,
    completeHireJob
}


