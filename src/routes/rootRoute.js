const express = require('express')
const { authRoute } = require('./authRoute')
const commentRoute = require('./commentRoute')
const jobTypeDetailRoute = require('./jobTypeDetailRoute')
const jobRoute = require('./jobRoute')
const jobTypeRoute = require('./jobTypeRoute')
const userRoute = require('./userRoute')
const hireJobRoute = require('./hireJobRoute')
const rootRoute = express.Router()

rootRoute.use('/auth', authRoute)

rootRoute.use('/binh-luan', commentRoute)

rootRoute.use("/chi-tiet-loai-cong-viec", jobTypeDetailRoute)

rootRoute.use('/cong-viec', jobRoute)

rootRoute.use('/loai-cong-viec', jobTypeRoute)

rootRoute.use('/users', userRoute)

rootRoute.use('/thue-cong-viec', hireJobRoute)

module.exports = rootRoute