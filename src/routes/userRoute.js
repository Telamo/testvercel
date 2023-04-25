
const express = require('express')
const { getListUser, deleteUser, getUserById, updateUserInfo, searchUserByName, uploadAvatar, pagingSearchUser, postUser } = require('../controllers/userController')
const checkToken = require('../controllers/veryfyController')
const upload = require('../controllers/uploadController')
const userRoute = express.Router()

// lấy dánh sách người dùng
userRoute.get('/', getListUser)

// xóa người dùng
userRoute.delete('/', checkToken, deleteUser )

// thêm người dùng (user & ADMIN)
userRoute.post('/', checkToken, postUser)

// phân trang tìm kiếm người dùng
userRoute.get('/phan-trang-tim-kiem', pagingSearchUser)

// lấy thông tin người dùng theo id
userRoute.get('/:id_nguoi_dung', getUserById)

// chỉnh sửa thông tin người dùng
userRoute.put('/:id_nguoi_dung', checkToken,updateUserInfo)

// tìm người dùng theo tên
userRoute.get('/search/:ten_nguoi_dung', searchUserByName)

// upload avatar
userRoute.post('/upload-avatar', checkToken, upload.single('avatar'), uploadAvatar)



module.exports = userRoute