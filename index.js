const express = require('express')
const app = express()
const port = 5000
const travel = require('./data/travel.json')
const Hotels = require('./data/Hotels.json')
var cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/travel', (req, res) => {
  res.send(travel)
})

app.get('/hotel/:id', (req, res) => {
    const getById = Hotels.filter(hotels => hotels.catId == req.params.id)
  res.send(getById)
})
app.get('/hotelUniq/:id', (req, res) => {
    const getByUniq = Hotels.find(hotels => hotels._id === req.params.id)
  res.send(getByUniq)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://ibb.co/8YR3nf1
// https://ibb.co/yfbXp9V
// https://ibb.co/6nKHS7F
// https://ibb.co/DrBVzpT
