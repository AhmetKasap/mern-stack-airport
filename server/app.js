const express = require('express')
const app = express()
const axios = require('axios')

app.get('/', (req,res) => {
    res.send('api')
})


app.get('/api/flights', async (req, res) => {
  console.log("test")
  const url = `http://api.aviationstack.com/v1/flights?access_key=2eb6d081522e9b6d5b1d1963248fa5da`;
  const response = await axios.get(url);
  console.log("response", response)
  const data = await response.json();
  res.json(data);
  console.log(data)
});




app.listen(process.env.PORT || 5001, () => {
    console.log(`Server is Running on port ${process.env.PORT || 5001}`)
})