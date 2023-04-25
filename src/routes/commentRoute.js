
const express = require('express')
const { getComment, postComment, getCommentById, deleteComment, putComment } = require('../controllers/commentController')
const checkToken = require('../controllers/veryfyController')
const commentRoute = express.Router()

// lấy danh sách bình luận
commentRoute.get('', getComment)

// đăng bình luận
commentRoute.post('', checkToken, postComment)

// lấy bình luận theo id công việc
commentRoute.get('/lay-binh-luan-theo-cong-viec/:id_cong_viec', getCommentById)

// xóa bình luận
commentRoute.delete('/:id_binh_luan', checkToken, deleteComment)

// chỉnh sửa bình luận
commentRoute.put('/:id_binh_luan', checkToken, putComment)


module.exports = commentRoute