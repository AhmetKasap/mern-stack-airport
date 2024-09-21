const express = require('express')
const app = express()


const routes = require('./src/routes/index.routes')
app.use('/api/v1', routes)




app.listen(process.env.PORT || 5001, () => {
  console.log(`Server is Running on port ${process.env.PORT || 5001}`)
})



