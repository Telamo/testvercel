
const express = require('express')
const { getHireJob, postHireJob, getHireJobById, updateHireJob, deleteHireJob, getListHireJob, completeHireJob, getListJobHired } = require('../controllers/hireJobController')
const checkToken = require('../controllers/veryfyController')
const  hireJobRoute = express.Router()

// lấy danh sách thuê công việc
hireJobRoute.get('/', getHireJob)

// post thuê công việc
hireJobRoute.post('/', checkToken, postHireJob)

// chỉnh sửa thuê công việc
hireJobRoute.put('/:id_thue_cong_viec', checkToken, updateHireJob)

//xóa thuê công việc
hireJobRoute.delete('/:id_thue_cong_viec', checkToken, deleteHireJob)

// lấy danh sách đã thuê
hireJobRoute.get('/lay-danh-sach-da-thue', checkToken, getListHireJob)

// lấy thuê công việc theo id
hireJobRoute.get('/:id_thue_cong_viec', getHireJobById)

// lấy danh sách công việc đã thuê
hireJobRoute.get('/lay-danh-sach-da-thue', checkToken, getListJobHired)

// hoàn thành thuê công việc
hireJobRoute.post('/hoan-thanh-cong-viec/:id_thue_cong_viec', completeHireJob)

module.exports = hireJobRoute