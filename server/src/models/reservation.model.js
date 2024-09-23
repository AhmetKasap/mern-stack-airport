const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    departure : {type : String},
    arrival : {type : String},
    departureTime : {type : String},
    arrivalTime : {type : String},
    totalTime : {type : String},
    from : {
        code : {type : String},
        name : {type : String},
        city : {type : String},
    },
    to : {
        code : {type : String},
        name : {type : String},
        city : {type : String},
    },
    stops : {type : String},
    date : {type : String},
    airline : {type : String},
    price : {type : String},

    userRef : {type: mongoose.Schema.Types.ObjectId, ref: 'users'}

})

const reservations = mongoose.model('reservations', reservationSchema)
module.exports = reservations