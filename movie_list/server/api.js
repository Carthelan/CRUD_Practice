const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Connected to the server")
})

app.get ('/movie_data', (req, res) => {
    knex('movie_data')
    .select('*')
    .then((data) => res.status(200).json(data));
})

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})