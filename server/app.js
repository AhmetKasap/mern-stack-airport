const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('api')
})

app.listen(process.env.PORT || 5001, () => {
    console.log(`Server is Running on port ${process.env.PORT || 5001}`)
})