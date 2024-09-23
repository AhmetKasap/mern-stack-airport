const userModel = require('../models/user.model')
const reservationModel = require('../models/reservation.model')
const APIError = require('../utils/Error')
const Response = require('../utils/Response')


const addReservation = async(req,res) => {
    const user = req.authUser
    const data = req.body

    console.log(req.body)

    const foundUser = await userModel.findOne({email : user.email})
    if(!foundUser) throw new APIError('user not found in databae', 404)

        const newReservation = new reservationModel({
            departure: data.departure,
            arrival: data.arrival,
            departureTime: data.departureTime,
            arrivalTime: data.arrivalTime,
            totalTime: data.totalTime,
            from: {
                code: data.from.code,
                name: data.from.name,
                city: data.from.city
            },
            to: {
                code: data.to.code,
                name: data.to.name,
                city: data.to.city
            },
            stops: data.stops,
            date: data.date,
            airline: data.airline,
            price: data.price,
            userRef: foundUser._id // kullanıcı referansını doğru ekleyin
        })
    
    const result = await newReservation.save()
    if(result) return new Response(null, 'reservation created').created(res)
    else throw new APIError('error in db', 500)
} 

const getReservationByUserId = async(req,res) => {
    const user = req.authUser

    const foundUser = await userModel.findOne({email : user.email})
    if(!foundUser) throw new APIError('user not found in databae', 404)

    const reservation = await reservationModel.find({userRef : user._id})
    if(reservation) return new Response(reservation, 'found reservation').ok(res)
    else return new Response(null, 'not found reservation').notfound(res)
}


module.exports = {
    addReservation, getReservationByUserId
}