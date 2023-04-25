
const express = require('express')
const checkToken = require('../controllers/veryfyController')
const { getListJob, postNewJob, getJobById, updateJob, deleteJob, uploadJobImage, getMenuJobtype, getJobByJobTypeDetailId, getJobDetail, getJobDetailByName, getJobTypeDetailById, pagingSearchJob } = require('../controllers/jobController')
const upload = require('../controllers/uploadController')
jobRoute = express.Router()

// lấy danh sách công việc
jobRoute.get('/', getListJob)

// thêm công việc
jobRoute.post('/', checkToken, upload.single('image'), postNewJob)

// phân trang tìm kiếm công việc
jobRoute.get('/phan-trang-tim-kiem', pagingSearchJob)

// lấy menu loại công việc
jobRoute.get('/lay-menu-loai-cong-viec', getMenuJobtype)

// get công việc theo id
jobRoute.get('/:id_cong_viec', getJobById)

// chỉnh sửa thông tin công việc
jobRoute.put('/:id_cong_viec', checkToken, upload.single('image'), updateJob)

// xóa công việc
jobRoute.delete('/:id_cong_viec',checkToken, deleteJob)

// upload hình ảnh công việc
jobRoute.post('/upload-hinh-cong-viec/:id_cong_viec', checkToken, upload.single('image'), uploadJobImage)

// lấy chi tiết loại công việc theo id
jobRoute.get('/lay-chi-tiet-loai-cong-viec/:id_loai_cong_viec', getJobTypeDetailById)

// lấy danh sách công việc theo id chi tiết loại công việc
jobRoute.get('/lay-cong-viec-theo-chi-tiet-loai/:id_chi_tiet_loai_cong_viec', getJobByJobTypeDetailId)

// lấy công việc chi tiết theo mã công việc
jobRoute.get('/lay-cong-viec-chi-tiet/:id_cong_viec', getJobDetail)

// lấy công việc chi tiết theo tên
jobRoute.get('/lay-danh-sach-cong-viec-theo-ten/:ten_cong_viec', getJobDetailByName)



module.exports = jobRoute

