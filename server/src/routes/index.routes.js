const express = require('express')
const router = express.Router()

const flightsRouter = require('./flight.routes')
const userRouter = require('./user.routes')
const reservationRouter = require('./reservation.routes')

router.use('/flights', flightsRouter)
router.use('/users', userRouter)
router.use('/reservation', reservationRouter)
 
module.exports=router