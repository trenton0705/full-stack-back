const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/', (req, res) => {
  knex('games').then((data) => {
    res.json(data)
  })
})

router.get('/:id', (req,res) => {
  let id = req.params.id
  knex('games').where('id', id)
  .then((data) => {
    res.json(data);
  })
})

module.exports = router;
