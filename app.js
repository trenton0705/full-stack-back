const express = require('express')
const bodyParser = require('body-parser')
const games = require('./routes/games')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
  res.send('Hello World')
})

app.use('/games', games)


app.listen(process.env.DATABASE_URL || 8080)
