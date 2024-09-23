const flights = require('../../filghts')
const cities =[
    "Madrid",
    "Paris",
    "Milano",
    "New York",
    "Dubai",
    "Amsterdam",
    "Los Angeles",
    "Atlanta",
    "Melbourne",
    "Chicago",
    "Seul",
    "Bangkok",
    "New York",
    "Dubai",
    "Johannesburg",
    "Seattle"
]


const showFlights = async(req,res ) => {
    const data = req.query
    const foundFlights = flights.filter(flight => {
        if(flight.from.city === data.departure && flight.to.city === data.arrival && flight.departure === data.fromDate && flight.arrival === data.toDate) {
            return flight
        }
    })
    if(foundFlights.length>0) return res.status(200).json(foundFlights)
    else return res.status(404).json("data not found")
}

const getCities = async(req,res) => {
    console.log(cities)
    const data = cities.map(data => data)
    return res.status(200).json(data)
}




module.exports = {
    showFlights,
    getCities
}