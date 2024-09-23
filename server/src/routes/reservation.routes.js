const express = require('express')
const router = express.Router()

const { addReservation, getReservationByUserId} = require('../controllers/reservation.controller')
const authMiddlewares = require('../middlewares/auth.middlewares')

router.post('/', authMiddlewares.checkToken, addReservation)
router.get('/', authMiddlewares.checkToken, getReservationByUserId)


module.exports=router