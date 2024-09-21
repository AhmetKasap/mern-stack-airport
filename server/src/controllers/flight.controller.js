const flights = require('../../filghts')


const showFlights = async(req,res ) => {
    const data = req.query
    const foundFlights = flights.filter(flight => {
        console.log(flight.from.city)
        if(flight.from.city === data.from && flight.to.city === data.to) {
            return flight
        }
    })
    console.log(foundFlights)
}

const filterFlights = async( ) => {
    
}


module.exports = {
    showFlights,
    filterFlights
}