const flights = [
  {
    id: 1,
    departure: '2024-09-22',
    arrival: '2024-09-22',
    departureTime: '12:15',
    arrivalTime: '14:40',
    totalTime: '2h 25m',
    from: {
      code: 'MXP',
      name: 'Milano Malpensa Airport, İtalya',
      city: 'Milano'
    },
    to: {
      code: 'MAD',
      name: 'Madrid-Barajas Airport, İspanya',
      city: 'Madrid'
    },
    stops: 'Nonstop',
    date: '2024-09-21',
    airline: "American Airlines",
    price: 100
  },
  {
    id: 2,
    departure: '2024-09-22',
    arrival: '2024-09-22',
    departureTime: '08:30',
    arrivalTime: '10:50',
    totalTime: '2h 20m',
    from: {
      code: 'LHR',
      name: 'London Heathrow Airport, İngiltere',
      city: 'London'
    },
    to: {
      code: 'CDG',
      name: 'Charles de Gaulle Airport, Fransa',
      city: 'Paris'
    },
    stops: 'Nonstop',
    date: '2024-09-22',
    airline: "British Airways",
    price: 250
  },
  {
    id: 3,
    departure: '2024-09-23',
    arrival: '2024-09-23',
    departureTime: '10:00',
    arrivalTime: '12:30',
    totalTime: '2h 30m',
    from: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport, ABD',
      city: 'New York'
    },
    to: {
      code: 'SFO',
      name: 'San Francisco International Airport, ABD',
      city: 'San Francisco'
    },
    stops: '1 Stop',
    date: '2024-09-23',
    airline: "Delta Airlines",
    price: 300
  },
  {
    id: 4,
    departure: '2024-09-24',
    arrival: '2024-09-24',
    departureTime: '15:00',
    arrivalTime: '17:30',
    totalTime: '2h 30m',
    from: {
      code: 'BOS',
      name: 'Boston Logan International Airport, ABD',
      city: 'Boston'
    },
    to: {
      code: 'MIA',
      name: 'Miami International Airport, ABD',
      city: 'Miami'
    },
    stops: 'Nonstop',
    date: '2024-09-24',
    airline: "JetBlue Airways",
    price: 220
  },
  {
    id: 5,
    departure: '2024-09-25',
    arrival: '2024-09-25',
    departureTime: '06:00',
    arrivalTime: '08:30',
    totalTime: '2h 30m',
    from: {
      code: 'DFW',
      name: 'Dallas/Fort Worth International Airport, ABD',
      city: 'Dallas'
    },
    to: {
      code: 'ORD',
      name: 'O\'Hare International Airport, ABD',
      city: 'Chicago'
    },
    stops: '1 Stop',
    date: '2024-09-25',
    airline: "American Airlines",
    price: 150
  },
  {
    id: 6,
    departure: '2024-09-26',
    arrival: '2024-09-26',
    departureTime: '17:00',
    arrivalTime: '19:25',
    totalTime: '2h 25m',
    from: {
      code: 'LAX',
      name: 'Los Angeles International Airport, ABD',
      city: 'Los Angeles'
    },
    to: {
      code: 'SEA',
      name: 'Seattle-Tacoma International Airport, ABD',
      city: 'Seattle'
    },
    stops: 'Nonstop',
    date: '2024-09-26',
    airline: "Alaska Airlines",
    price: 180
  },
  {
    id: 7,
    departure: '2024-09-27',
    arrival: '2024-09-27',
    departureTime: '09:15',
    arrivalTime: '11:45',
    totalTime: '2h 30m',
    from: {
      code: 'ATL',
      name: 'Hartsfield-Jackson Atlanta International Airport, ABD',
      city: 'Atlanta'
    },
    to: {
      code: 'PHX',
      name: 'Phoenix Sky Harbor International Airport, ABD',
      city: 'Phoenix'
    },
    stops: '1 Stop',
    date: '2024-09-27',
    airline: "Southwest Airlines",
    price: 210
  },
  {
    id: 8,
    departure: '2024-09-28',
    arrival: '2024-09-28',
    departureTime: '14:00',
    arrivalTime: '16:30',
    totalTime: '2h 30m',
    from: {
      code: 'YYZ',
      name: 'Toronto Pearson International Airport, Kanada',
      city: 'Toronto'
    },
    to: {
      code: 'YUL',
      name: 'Montréal-Pierre Elliott Trudeau International Airport, Kanada',
      city: 'Montreal'
    },
    stops: 'Nonstop',
    date: '2024-09-28',
    airline: "Air Canada",
    price: 240
  },
  {
    id: 9,
    departure: '2024-09-29',
    arrival: '2024-09-29',
    departureTime: '11:30',
    arrivalTime: '14:00',
    totalTime: '2h 30m',
    from: {
      code: 'SYD',
      name: 'Sydney Kingsford Smith Airport, Avustralya',
      city: 'Sydney'
    },
    to: {
      code: 'AKL',
      name: 'Auckland Airport, Yeni Zelanda',
      city: 'Auckland'
    },
    stops: '1 Stop',
    date: '2024-09-29',
    airline: "Qantas",
    price: 350
  },
  {
    id: 10,
    departure: '2024-09-30',
    arrival: '2024-09-30',
    departureTime: '07:00',
    arrivalTime: '09:30',
    totalTime: '2h 30m',
    from: {
      code: 'DXB',
      name: 'Dubai International Airport, BAE',
      city: 'Dubai'
    },
    to: {
      code: 'SIN',
      name: 'Changi Airport, Singapur',
      city: 'Singapur'
    },
    stops: 'Nonstop',
    date: '2024-09-30',
    airline: "Emirates",
    price: 400
  },
  {
    id: 11,
    departure: '2024-09-22',
    arrival: '2024-09-22',
    departureTime: '13:15',
    arrivalTime: '14:40',
    totalTime: '2h 25m',
    from: {
      code: 'MXP',
      name: 'Milano Malpensa Airport, İtalya',
      city: 'Milano'
    },
    to: {
      code: 'MAD',
      name: 'Madrid-Barajas Airport, İspanya',
      city: 'Madrid'
    },
    stops: 'Nonstop',
    date: '2024-09-21',
    airline: "American Airlines",
    price: 220
  },
]
module.exports = flights