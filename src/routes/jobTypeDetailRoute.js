

const express = require('express')
const { getJobTypeDetail, postJobTypeDetail, JobTypeDetailById, updateJobTypeDetail, deleteJobTypeDetail, uploadImageJobTypeDetail, pagingSearchJobTypeDetail } = require('../controllers/jobTypeDetailController')
const checkToken = require('../controllers/veryfyController')
const jobTypeDetailRoute =  express.Router()
const upload = require('../controllers/uploadController')


// lấy danh sách chi tiết loại công việc
jobTypeDetailRoute.get('/', getJobTypeDetail)

// thêm danh sách chi tiết loại công việc
jobTypeDetailRoute.post('/', checkToken, postJobTypeDetail)

// update chi tiết loại công việc
jobTypeDetailRoute.put('/:id_chi_tiet_loai_cong_viec', checkToken, updateJobTypeDetail)

// Xóa chi tiết loại công việc
jobTypeDetailRoute.delete('/:id_chi_tiet_loai_cong_viec', checkToken, deleteJobTypeDetail)

// upload hình cho chi tiết loại công việc
jobTypeDetailRoute.post('/upload-hinh-chi-tiet-loai-cong-viec/:id_chi_tiet_loai_cong_viec', checkToken, upload.single('image') , uploadImageJobTypeDetail)

// phân trang tìm kiếm chi tiết loại công việc
jobTypeDetailRoute.get('/phan-trang-tim-kiem', pagingSearchJobTypeDetail)

// chi tiết loại công việc theo id
jobTypeDetailRoute.get('/:id_chi_tiet_loai_cong_viec', JobTypeDetailById)


module.exports = jobTypeDetailRoute