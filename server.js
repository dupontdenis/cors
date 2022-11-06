const express = require('express');
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['DELETE'],
  allowedHeaders: ['Content-Type']
}))


app.post('/', (req, res) => {
  console.log("from Form: " + req.body.user)
  res.json(req.body && req.body.user || 'nothing received')
})


app.listen(3000, () => {
  console.log(`http://localhost:3000`)
}) 