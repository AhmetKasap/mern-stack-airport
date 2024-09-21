const express = require('express')
const router = express.Router()

const { showFlights, filterFlights, getCities} = require('../controllers/flight.controller')

router.get('/', showFlights)
router.get('/filter', filterFlights)
router.get('/cities', getCities)


module.exports=router