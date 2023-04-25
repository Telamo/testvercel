// yarn add mysql2 sequelize sequelize-auto
// TỰ ĐỘNG TẠO MODEL TỪ BẢNG DỮ LIỆU CÓ SẴN: yarn sequelize-auto -h localhost -d capstone_fiverr -u root -x 1234 -p 3307 --dialect mysql -o src/models -l es6


const { Sequelize } = require('sequelize')
const { database, userName, passWord, host, port, dialect } = require('../config/index')
const sequelize = new Sequelize(database, userName, passWord, {
    host,
    port,
    dialect 
})

module.exports = sequelize