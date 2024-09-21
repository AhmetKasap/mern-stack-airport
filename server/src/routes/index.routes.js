const express = require('express')
const router = express.Router()

const flightsRouter = require('./flight.routes')

router.use('/flights', flightsRouter)

module.exports=router