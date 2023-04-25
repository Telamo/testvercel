


/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *      description: responses
 *      tags: [Auth]
 *      parameters:
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *             phone:
 *               type: string
 *             birth_day:
 *               type: string
 *             gender:
 *               type: boolean
 *             skill:
 *               type: string
 *             certification:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      description: responses
 *      tags: [Auth]
 *      parameters:
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/binh-luan:
 *  get:
 *      description: responses
 *      tags: [BinhLuan]
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/binh-luan:
 *  post:
 *      description: responses
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id_cong_viec:
 *               type: integer
 *             noi_dung:
 *               type: string
 *             sao_binh_luan:
 *               type: integer
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/binh-luan/{id}:
 *  put:
 *      description: responses
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             id_cong_viec:
 *               type: integer
 *             noi_dung:
 *               type: string
 *             sao_binh_luan:
 *               type: integer
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/binh-luan/{id}:
 *  delete:
 *      description: responses
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/binh-luan/lay-binh-luan-theo-cong-viec/{MaCongViec}:
 *  get:
 *      description: responses
 *      tags: [BinhLuan]
 *      parameters:
 *      - in: path
 *        name: MaCongViec
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec:
 *  get:
 *      description: responses
 *      tags: [ChiTietLoaiCongViec]
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec:
 *  post:
 *      description: responses
 *      tags: [ChiTietLoaiCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             ten_chi_tiet:
 *               type: string
 *             id_loai_cong_viec:
 *               type: integer
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/phan-trang-tim-kiem:
 *  get:
 *      description: responses
 *      tags: [ChiTietLoaiCongViec]
 *      parameters:
 *        - name: pageIndex
 *          in: query
 *          required: true
 *          type: integer
 *        - name: pageSize
 *          in: query
 *          required: true
 *          type: integer
 *        - name: keyword
 *          in: query
 *          required: true
 *          type: string
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/{id}:
 *  get:
 *      description: responses
 *      tags: [ChiTietLoaiCongViec]
 *      parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/{id}:
 *  put:
 *      description: responses
 *      tags: [ChiTietLoaiCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string  
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             ten_chi_tiet:
 *               type: string
 * 
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/{id}:
 *  delete:
 *      description: responses
 *      tags: [ChiTietLoaiCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string  
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/upload-hinh-chi-tiet-loai-cong-viec/{id_chi_tiet_loai_cong_viec}:
 *  post:
 *      description: responses
 *      tags: [ChiTietLoaiCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string  
 *      - in: path
 *        name: id_chi_tiet_loai_cong_viec
 *        type: integer
 *        required: true
 *      - in: formData
 *        name: image
 *        type: file
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/cong-viec:
 *  get:
 *      description: responses
 *      tags: [CongViec]
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/cong-viec:
 *  post:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             ten_cong_viec:
 *               type: string
 *             danh_gia:
 *               type: integer
 *             gia_tien:
 *               type: integer
 *             mo_ta:
 *               type: string
 *             mo_ta_ngan:
 *               type: string
 *             sao_cong_viec:
 *               type: integer
 *             id_chi_tiet_loai_cong_viec:
 *               type: integer
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/cong-viec/phan-trang-tim-kiem:
 *  get:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *        - name: pageIndex
 *          in: query
 *          required: true
 *          type: integer
 *        - name: pageSize
 *          in: query
 *          required: true
 *          type: integer
 *        - name: keyword
 *          in: query
 *          required: true
 *          type: string
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/cong-viec/{id}:
 *  get:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/cong-viec/{id}:
 *  put:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             ten_cong_viec:
 *               type: string
 *             danh_gia:
 *               type: integer
 *             gia_tien:
 *               type: integer
 *             mo_ta:
 *               type: string
 *             mo_ta_ngan:
 *               type: string
 *             sao_cong_viec:
 *               type: integer
 *             id_chi_tiet_loai_cong_viec:
 *               type: integer
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/cong-viec/{id}:
 *  delete:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string  
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */




/**
 * @swagger
 * /api/cong-viec/upload-hinh-cong-viec/{id_cong_viec}:
 *  post:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string  
 *      - in: path
 *        name: id_cong_viec
 *        type: integer
 *        required: true
 *      - in: formData
 *        name: image
 *        type: file
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/cong-viec/lay-menu-loai-cong-viec:
 *  get:
 *      description: responses
 *      tags: [CongViec]
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/cong-viec/lay-chi-tiet-loai-cong-viec/{id_loai_cong_viec}:
 *  get:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: path
 *        name: id_loai_cong_viec
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/{id_chi_tiet_loai}:
 *  get:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: path
 *        name: id_chi_tiet_loai
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/cong-viec/lay-cong-viec-chi-tiet/{id}:
 *  get:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/cong-viec/lay-danh-sach-cong-viec-theo-ten/{TenCongViec}:
 *  get:
 *      description: responses
 *      tags: [CongViec]
 *      parameters:
 *      - in: path
 *        name: TenCongViec
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/loai-cong-viec:
 *  get:
 *      description: responses
 *      tags: [LoaiCongViec]
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/loai-cong-viec:
 *  post:
 *      description: responses
 *      tags: [LoaiCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             ten_loai_cong_viec:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/loai-cong-viec/phan-trang-tim-kiem:
 *  get:
 *      description: responses
 *      tags: [LoaiCongViec]
 *      parameters:
 *        - name: pageIndex
 *          in: query
 *          required: true
 *          type: integer
 *        - name: pageSize
 *          in: query
 *          required: true
 *          type: integer
 *        - name: keyword
 *          in: query
 *          required: true
 *          type: string
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/loai-cong-viec/{id}:
 *  get:
 *      description: responses
 *      tags: [LoaiCongViec]
 *      parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/loai-cong-viec/{id}:
 *  put:
 *      description: responses
 *      tags: [LoaiCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             ten_loai_cong_viec:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/loai-cong-viec/{id}:
 *  delete:
 *      description: responses
 *      tags: [LoaiCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string  
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/users:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/users:
 *  post:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: header
 *        name: token
 *      - in: body
 *        name: model
 *        schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *             phone:
 *               type: string
 *             birth_day:
 *               type: string
 *             gender:
 *               type: boolean
 *             role:
 *               type: string
 *             skill:
 *               type: string
 *             certification:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/users:
 *  delete:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string  
 *      - in: query
 *        name: id_nguoi_dung
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/users/phan-trang-tim-kiem:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *        - name: pageIndex
 *          in: query
 *          required: true
 *          type: integer
 *        - name: pageSize
 *          in: query
 *          required: true
 *          type: integer
 *        - name: keyword
 *          in: query
 *          required: true
 *          type: string
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *             phone:
 *               type: string
 *             birth_day:
 *               type: string
 *             gender:
 *               type: boolean
 *             skill:
 *               type: string
 *             certification:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */




/**
 * @swagger
 * /api/users/search/{TenNguoiDung}:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: TenNguoiDung
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */




/**
 * @swagger
 * /api/users/upload-avatar:
 *  post:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: formData
 *        name: avatar
 *        type: file
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/thue-cong-viec:
 *  get:
 *      description: responses
 *      tags: [ThueCongViec]
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/thue-cong-viec:
 *  post:
 *      description: responses
 *      tags: [ThueCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             id_cong_viec:
 *               type: integer
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/thue-cong-viec/{id}:
 *  get:
 *      description: responses
 *      tags: [ThueCongViec]
 *      parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/thue-cong-viec/{id}:
 *  put:
 *      description: responses
 *      tags: [ThueCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *      - in: path
 *        name: id
 *      - in: body
 *        name: model
 *        schema:
 *           properties:
 *             id_cong_viec:
 *               type: integer
 *             hoan_thanh:
 *               type: boolean
 *             ngay_thue:
 *               type: string
 *               format: date-time
 * 
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/thue-cong-viec/{id}:
 *  delete:
 *      description: responses
 *      tags: [ThueCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string  
 *      - in: path
 *        name: id
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */



/**
 * @swagger
 * /api/thue-cong-viec/lay-danh-sach-da-thue:
 *  get:
 *      description: responses
 *      tags: [ThueCongViec]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */




/**
 * @swagger
 * /api/thue-cong-viec/hoan-thanh-cong-viec/{id_thue_cong_viec}:
 *  post:
 *      description: responses
 *      tags: [ThueCongViec]
 *      parameters:
 *      - in: path
 *        name: id_thue_cong_viec
 *        type: integer
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */



