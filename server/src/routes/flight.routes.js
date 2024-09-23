const express = require('express')
const router = express.Router()

const { showFlights, getCities} = require('../controllers/flight.controller')

router.get('/', showFlights)
router.get('/cities', getCities)


module.exports=router