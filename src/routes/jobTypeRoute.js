
const express = require('express')
const { getListJobType, postJobType, getJobTypeById, updateJobType, deleteJobType, pagingSearchJobType } = require('../controllers/jobTypeController')
const checkToken = require('../controllers/veryfyController')
const jobTypeRoute = express.Router()

// lấy danh sách loại công việc
jobTypeRoute.get('/', getListJobType)

// thêm loại công việc
jobTypeRoute.post('/', checkToken, postJobType)

jobTypeRoute.get('/phan-trang-tim-kiem', pagingSearchJobType)

// lấy loại công việc theo id
jobTypeRoute.get('/:id_loai_cong_viec', getJobTypeById)

// cập nhật loại công việc
jobTypeRoute.put('/:id_loai_cong_viec', checkToken, updateJobType)

// xóa loại công việc
jobTypeRoute.delete('/:id_loai_cong_viec', checkToken, deleteJobType)




module.exports = jobTypeRoute