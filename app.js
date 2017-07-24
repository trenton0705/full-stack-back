const express = require('express')
const bodyParser = require('body-parser')
const games = require('./routes/games')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
  res.send('Hello')
})

app.use('/games', games)


app.listen(process.env.PORT || 8080)
