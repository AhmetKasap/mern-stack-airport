const express = require('express')
const app = express()



//! Cors Options
const cors = require('cors')
const corsOptions = require('./src/middlewares/lib/cors')
app.use(cors(corsOptions))


const routes = require('./src/routes/index.routes')
app.use('/api/v1', routes)


app.listen(process.env.PORT || 5001, () => {
  console.log(`Server is Running on port ${process.env.PORT || 5001}`)
})



