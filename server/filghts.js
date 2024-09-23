const flights = [
  {
    id: 1,
    departure: '2024-09-25',
    arrival: '2024-09-25',
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
    airline: "Lufthansa",
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
    airline: "Air Italy",
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
    airline: "Air Italy",
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
    airline: "Lufthansa",
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
    airline: "Lufthansa",
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
    airline: "American Airlines",
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
    airline: "Air France",
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
    airline: "Air France",
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
    airline: "Air France",
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
    airline: "Air France",
    price: 400
  },
  {
    id: 11,
    departure: '2024-09-25',
    arrival: '2024-09-25',
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
  {
    id: 12,
    departure: '2024-09-26',
    arrival: '2024-09-26',
    departureTime: '08:30',
    arrivalTime: '10:45',
    totalTime: '2h 15m',
    from: { code: 'MAD', name: 'Madrid-Barajas Airport, İspanya', city: 'Madrid' },
    to: { code: 'PAR', name: 'Charles de Gaulle Airport, Fransa', city: 'Paris' },
    stops: 'Nonstop',
    airline: "Air France",
    price: 120
  },
  {
    id: 13,
    departure: '2024-09-27',
    arrival: '2024-09-27',
    departureTime: '15:00',
    arrivalTime: '17:30',
    totalTime: '2h 30m',
    from: { code: 'PAR', name: 'Charles de Gaulle Airport, Fransa', city: 'Paris' },
    to: { code: 'MIL', name: 'Milano Malpensa Airport, İtalya', city: 'Milano' },
    stops: 'Nonstop',
    airline: "Air France",
    price: 110
  },
  {
    id: 14,
    departure: '2024-09-28',
    arrival: '2024-09-28',
    departureTime: '11:15',
    arrivalTime: '13:00',
    totalTime: '1h 45m',
    from: { code: 'MIL', name: 'Milano Malpensa Airport, İtalya', city: 'Milano' },
    to: { code: 'NYC', name: 'John F. Kennedy International Airport, ABD', city: 'New York' },
    stops: '1 Stop',
    airline: "American Airlines",
    price: 250
  },
  {
    id: 15,
    departure: '2024-09-29',
    arrival: '2024-09-29',
    departureTime: '09:00',
    arrivalTime: '18:00',
    totalTime: '9h 0m',
    from: { code: 'NYC', name: 'John F. Kennedy International Airport, ABD', city: 'New York' },
    to: { code: 'DXB', name: 'Dubai International Airport, Birleşik Arap Emirlikleri', city: 'Dubai' },
    stops: '1 Stop',
    airline: "American Airlines",
    price: 500
  },
  {
    id: 16,
    departure: '2024-09-30',
    arrival: '2024-09-30',
    departureTime: '14:00',
    arrivalTime: '22:00',
    totalTime: '8h 0m',
    from: { code: 'DXB', name: 'Dubai International Airport, Birleşik Arap Emirlikleri', city: 'Dubai' },
    to: { code: 'AMS', name: 'Amsterdam Schiphol Airport, Hollanda', city: 'Amsterdam' },
    stops: 'Nonstop',
    airline: "Alitalia",
    price: 300
  },
  {
    id: 17,
    departure: '2024-10-01',
    arrival: '2024-10-01',
    departureTime: '16:15',
    arrivalTime: '22:30',
    totalTime: '6h 15m',
    from: { code: 'AMS', name: 'Amsterdam Schiphol Airport, Hollanda', city: 'Amsterdam' },
    to: { code: 'LAX', name: 'Los Angeles International Airport, ABD', city: 'Los Angeles' },
    stops: 'Nonstop',
    airline: "Air France",
    price: 350
  },
  {
    id: 18,
    departure: '2024-10-02',
    arrival: '2024-10-02',
    departureTime: '10:00',
    arrivalTime: '17:00',
    totalTime: '7h 0m',
    from: { code: 'LAX', name: 'Los Angeles International Airport, ABD', city: 'Los Angeles' },
    to: { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International Airport, ABD', city: 'Atlanta' },
    stops: 'Nonstop',
    airline: "Lufthansa",
    price: 200
  },
  {
    id: 19,
    departure: '2024-10-03',
    arrival: '2024-10-03',
    departureTime: '09:45',
    arrivalTime: '21:15',
    totalTime: '11h 30m',
    from: { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International Airport, ABD', city: 'Atlanta' },
    to: { code: 'MEL', name: 'Melbourne Airport, Avustralya', city: 'Melbourne' },
    stops: '1 Stop',
    airline: "Lufthansa",
    price: 800
  },
  {
    id: 20,
    departure: '2024-10-04',
    arrival: '2024-10-04',
    departureTime: '14:00',
    arrivalTime: '16:00',
    totalTime: '2h 0m',
    from: { code: 'MEL', name: 'Melbourne Airport, Avustralya', city: 'Melbourne' },
    to: { code: 'CHI', name: 'O\'Hare International Airport, ABD', city: 'Chicago' },
    stops: 'Nonstop',
    airline: "Air Italy",
    price: 220
  },
  {
    id: 21,
    departure: '2024-10-05',
    arrival: '2024-10-05',
    departureTime: '12:30',
    arrivalTime: '21:00',
    totalTime: '8h 30m',
    from: { code: 'CHI', name: 'O\'Hare International Airport, ABD', city: 'Chicago' },
    to: { code: 'SEL', name: 'Incheon International Airport, Güney Kore', city: 'Seul' },
    stops: '1 Stop',
    airline: "Air France",
    price: 650
  }

]
module.exports = flights