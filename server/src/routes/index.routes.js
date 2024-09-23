const express = require('express')
const router = express.Router()

const flightsRouter = require('./flight.routes')
const userRouter = require('./user.routes')

router.use('/flights', flightsRouter)
router.use('/users', userRouter)

module.exports=router