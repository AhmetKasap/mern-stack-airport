const express = require('express')
const router = express.Router()

const { showFlights, filterFlights} = require('../controllers/flight.controller')

router.get('/', showFlights)
router.get('/filter', filterFlights)


module.exports=router