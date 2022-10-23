const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const destinations = require('./Data/destination.json');
const hotels = require('./Data/hotels.json')
app.get('/', (req, res) => {
    res.send('travel guru server is running')
})
app.get('/destinations', (req, res) => {
    res.send(destinations)
})
app.get('/destinations/:id', (req, res) => {
    const id = req.params.id;
    const destination = destinations.find(des => des.id == id);
    res.send(destination)
})
app.get('/hotels', (req, res) => {
    res.send(hotels)
})
app.listen(port, () => {
    console.log(`travel guru running on the port ${port}`)
})