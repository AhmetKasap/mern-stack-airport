const flights = [
  {
    id: 1,
    departure: '2024-09-21T10:00:00Z',
    arrival: '2024-09-21T12:00:00Z',
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
    stops: 0,
    date: '2024-09-21',
    airline: "American Airlines",
    price: 200
  },
  {
    id: 2,
    departure: '2024-09-21T13:00:00Z',
    arrival: '2024-09-21T15:30:00Z',
    from: {
      code: 'FCO',
      name: 'Rome Fiumicino Airport, İtalya',
      city: 'Roma'
    },
    to: {
      code: 'CDG',
      name: 'Charles de Gaulle Airport, Fransa',
      city: 'Paris'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "Air France",
    price: 180
  },
  {
    id: 3,
    departure: '2024-09-21T09:30:00Z',
    arrival: '2024-09-21T12:00:00Z',
    from: {
      code: 'LHR',
      name: 'London Heathrow Airport, Birleşik Krallık',
      city: 'Londra'
    },
    to: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport, ABD',
      city: 'New York'
    },
    stops: 1,
    date: '2024-09-21',
    airline: "British Airways",
    price: 500
  },
  {
    id: 4,
    departure: '2024-09-21T07:00:00Z',
    arrival: '2024-09-21T10:30:00Z',
    from: {
      code: 'IST',
      name: 'Istanbul Airport, Türkiye',
      city: 'İstanbul'
    },
    to: {
      code: 'DXB',
      name: 'Dubai International Airport, Birleşik Arap Emirlikleri',
      city: 'Dubai'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "Emirates",
    price: 400
  },
  {
    id: 5,
    departure: '2024-09-21T15:45:00Z',
    arrival: '2024-09-21T19:00:00Z',
    from: {
      code: 'FRA',
      name: 'Frankfurt Airport, Almanya',
      city: 'Frankfurt'
    },
    to: {
      code: 'AMS',
      name: 'Amsterdam Schiphol Airport, Hollanda',
      city: 'Amsterdam'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "Lufthansa",
    price: 250
  },
  {
    id: 6,
    departure: '2024-09-21T14:30:00Z',
    arrival: '2024-09-21T17:15:00Z',
    from: {
      code: 'SFO',
      name: 'San Francisco International Airport, ABD',
      city: 'San Francisco'
    },
    to: {
      code: 'LAX',
      name: 'Los Angeles International Airport, ABD',
      city: 'Los Angeles'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "United Airlines",
    price: 150
  },
  {
    id: 7,
    departure: '2024-09-21T12:00:00Z',
    arrival: '2024-09-21T14:30:00Z',
    from: {
      code: 'ORD',
      name: 'Chicago O\'Hare International Airport, ABD',
      city: 'Chicago'
    },
    to: {
      code: 'ATL',
      name: 'Hartsfield-Jackson Atlanta International Airport, ABD',
      city: 'Atlanta'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "Delta Airlines",
    price: 220
  },
  {
    id: 8,
    departure: '2024-09-21T18:30:00Z',
    arrival: '2024-09-21T21:00:00Z',
    from: {
      code: 'SYD',
      name: 'Sydney Kingsford Smith Airport, Avustralya',
      city: 'Sydney'
    },
    to: {
      code: 'MEL',
      name: 'Melbourne Airport, Avustralya',
      city: 'Melbourne'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "Qantas",
    price: 180
  },
  {
    id: 9,
    departure: '2024-09-21T10:00:00Z',
    arrival: '2024-09-21T12:45:00Z',
    from: {
      code: 'MIA',
      name: 'Miami International Airport, ABD',
      city: 'Miami'
    },
    to: {
      code: 'ORD',
      name: 'Chicago O\'Hare International Airport, ABD',
      city: 'Chicago'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "American Airlines",
    price: 270
  },
  {
    id: 10,
    departure: '2024-09-21T09:00:00Z',
    arrival: '2024-09-21T12:30:00Z',
    from: {
      code: 'HND',
      name: 'Tokyo Haneda Airport, Japonya',
      city: 'Tokyo'
    },
    to: {
      code: 'ICN',
      name: 'Incheon International Airport, Güney Kore',
      city: 'Seul'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "All Nippon Airways",
    price: 350
  },
  {
    id: 11,
    departure: '2024-09-21T07:30:00Z',
    arrival: '2024-09-21T11:00:00Z',
    from: {
      code: 'SIN',
      name: 'Singapore Changi Airport, Singapur',
      city: 'Singapur'
    },
    to: {
      code: 'BKK',
      name: 'Suvarnabhumi Airport, Tayland',
      city: 'Bangkok'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "Singapore Airlines",
    price: 180
  },
  {
    id: 12,
    departure: '2024-09-21T11:15:00Z',
    arrival: '2024-09-21T14:45:00Z',
    from: {
      code: 'YYZ',
      name: 'Toronto Pearson International Airport, Kanada',
      city: 'Toronto'
    },
    to: {
      code: 'LGA',
      name: 'LaGuardia Airport, ABD',
      city: 'New York'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "Air Canada",
    price: 290
  },
  {
    id: 13,
    departure: '2024-09-21T14:00:00Z',
    arrival: '2024-09-21T16:45:00Z',
    from: {
      code: 'BOM',
      name: 'Chhatrapati Shivaji Maharaj International Airport, Hindistan',
      city: 'Mumbai'
    },
    to: {
      code: 'DXB',
      name: 'Dubai International Airport, Birleşik Arap Emirlikleri',
      city: 'Dubai'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "Emirates",
    price: 330
  },
  {
    id: 14,
    departure: '2024-09-21T07:45:00Z',
    arrival: '2024-09-21T10:30:00Z',
    from: {
      code: 'CPT',
      name: 'Cape Town International Airport, Güney Afrika',
      city: 'Cape Town'
    },
    to: {
      code: 'JNB',
      name: 'O. R. Tambo International Airport, Güney Afrika',
      city: 'Johannesburg'
    },
    stops: 0,
    date: '2024-09-21',
    airline: "South African Airways",
    price: 160
  },
  {
    id: 15,
    departure: '2024-09-21T17:30:00Z',
    arrival: '2024-09-21T20:45:00Z',
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
    stops: 0,
    date: '2024-09-21',
    airline: "Alaska Airlines",
    price: 210
  },
 
]
module.exports = flights