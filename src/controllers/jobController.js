
const { Sequelize, where } = require('sequelize')
const { decodeToken } = require('../config/jwt')
const { successCode, errorCode, failCode } = require('../config/response')
const sequelize = require('../models/index')
const initModels = require('../models/init-models')
const model = initModels(sequelize)
const Op = Sequelize.Op

const getListJob = async (req, res) => {
    try {
        let listJob = await model.CongViec.findAll()
        successCode(res, listJob, "lấy danh sách thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const postNewJob = async (req, res) => {
    try {
        let { token } = req.headers
        let id_nguoi_tao = decodeToken(token).data.id_nguoi_dung
        let { ten_cong_viec, danh_gia, gia_tien, mo_ta, mo_ta_ngan, id_chi_tiet_loai_cong_viec, sao_cong_viec } = req.body
        let modelJob = {
            ten_cong_viec,
            danh_gia,
            gia_tien,
            hinh_anh: "",
            mo_ta,
            mo_ta_ngan,
            sao_cong_viec,
            id_chi_tiet_loai_cong_viec,
            id_nguoi_tao
        }
        await model.CongViec.create(modelJob)
        successCode(res, modelJob, "thêm thành công!")

    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const getJobById = async (req, res) => {
    try {
        let { id_cong_viec } = req.params
        let jobData = await model.CongViec.findOne({ where: { id_cong_viec } })
        if(jobData) {
            successCode(res, jobData, "Lấy thành công!")
        } else {
            failCode(res, "Không tìm thấy id công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }

}

const pagingSearchJob = async(req, res) => {
    try {
        let {pageIndex, pageSize, keyword} = req.query
        pageIndex = parseInt(pageIndex) 
        pageSize = parseInt(pageSize) 
        let data = await model.CongViec.findAll({
            where: {
                ten_cong_viec: {
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


const updateJob = async (req, res) => {
    try {
        let { token } = req.headers
        let id_nguoi_dung = decodeToken(token).data.id_nguoi_dung
        let { id_cong_viec } = req.params
        let { ten_cong_viec, danh_gia, gia_tien, mo_ta, mo_ta_ngan, sao_cong_viec } = req.body
        let jobInfo = await model.CongViec.findOne({ where: { id_cong_viec } })
        if (jobInfo) {
            let id_nguoi_tao = jobInfo.id_nguoi_tao
            let modelJob = {
                id_cong_viec,
                ten_cong_viec,
                danh_gia,
                gia_tien,
                id_nguoi_tao,
                hinh_anh: "",
                mo_ta,
                mo_ta_ngan,
                sao_cong_viec
            }
            if (id_nguoi_dung == jobInfo.id_nguoi_tao) {
                await model.CongViec.update(modelJob, {
                    where: { id_cong_viec }
                })
                successCode(res, modelJob, "Sửa thông tin thành công!")
            } else {
                failCode(res, "", "User không có quyền sửa thông tin công việc!")
            }

        } else {
            failCode(res, "", "không tìm thấy id công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const deleteJob = async (req, res) => {
    try {
        let { token } = req.headers
        let { id_cong_viec } = req.params
        let id_nguoi_dung = decodeToken(token).data.id_nguoi_dung
        let jobInfo = await model.CongViec.findOne({ where: { id_cong_viec } })
        if (jobInfo) {
            if (id_nguoi_dung == jobInfo.id_nguoi_tao || jobInfo.role == "ADMIN") {
                await model.CongViec.destroy({ where: { id_cong_viec } })
                successCode(res, jobInfo, "Xóa thành công!")
            } else {
                failCode(res, "", "User không có quyền xóa!")
            }
        } else {
            failCode(res, "", "không tìm thấy id công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const uploadJobImage = async (req, res) => {
    try {
        let { token } = req.headers
        let id_nguoi_dung = decodeToken(token).data.id_nguoi_dung
        let file = req.file
        let { id_cong_viec } = req.params
        let jobInfo = await model.CongViec.findOne({where: {id_cong_viec}})
        if(jobInfo) {
            if(id_nguoi_dung == jobInfo.id_nguoi_tao) {
                jobInfo.hinh_anh = `${req.protocol}://${req.get('host')}/public/img/${file.filename}`
                await jobInfo.save()
                successCode(res, jobInfo, "upload hình ảnh thành công!")
            } else {
                failCode(res, "", "user không có quyền post hình ảnh cho công việc này")
            }
        } else {
            failCode(res, "", "không tìm thấy id công việc!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const getMenuJobtype = async (req, res) => {
    try {
        let menu = await model.LoaiCongViec.findAll({
            include: ['ChiTietLoaiCongViecs']
        })
        successCode(res, menu, "Lấy menu thành công!" )
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const getJobTypeDetailById = async (req, res) => {
    try {
        let {id_loai_cong_viec} = req.params
        let jobTypeDetai = await model.LoaiCongViec.findByPk(id_loai_cong_viec, {
            include: ['ChiTietLoaiCongViecs']
        })
        successCode(res, jobTypeDetai, "Lấy thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res,"Lỗi BE")
    }   
}

const getJobByJobTypeDetailId = async (req, res) => {
    try {
        let {id_chi_tiet_loai_cong_viec} = req. params
        let listJob = await model.CongViec.findAll({
            where: {id_chi_tiet_loai_cong_viec},
            include: ['id_chi_tiet_loai_cong_viec_ChiTietLoaiCongViec']
        }) 
        successCode(res, listJob, "Lấy thành công!")
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}


const getJobDetail = async (req, res) => {
    try {
        let {id_cong_viec} = req.params
        let jobDetail = await model.CongViec.findByPk(id_cong_viec)
        if(jobDetail) {
            successCode(res, jobDetail, "lấy thành công!")
        } else {
            failCode(res, "", "id công việc không tồn tại!")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}

const getJobDetailByName = async (req, res) => {
    try {
        let { ten_cong_viec } = req.params
        let jobDetail = await model.CongViec.findAll({
            where: {
                ten_cong_viec: {
                    [Op.like]: `%${ten_cong_viec}%`
                }
            }
        })
        if(jobDetail.length>0) {
            successCode(res, jobDetail, "lấy thành công!")
        } else {
            failCode(res, "", "Không tìm thấy công việc phù hợp")
        }
    }
    catch (err) {
        console.log(err)
        errorCode(res, "Lỗi BE")
    }
}



module.exports = {
    getListJob,
    postNewJob,
    pagingSearchJob,
    getJobById,
    updateJob,
    deleteJob,
    uploadJobImage,
    getMenuJobtype,
    getJobTypeDetailById,
    getJobByJobTypeDetailId,
    getJobDetail,
    getJobDetailByName
}