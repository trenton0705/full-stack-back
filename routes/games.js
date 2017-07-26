const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/', (req, res) => {
  knex('games').then((data) => {
    res.json(data)
  })
})

router.post('/', (req, res) => {
  if (validate(req.body)) {
    let name = req.body.name
    let publisher = req.body.publisher
    let release = req.body.release

    knex('games').insert({
        name: name,
        publisher: publisher,
        release: release
      }).returning('id')
      .then((id) => {
        res.send(id)
      })
  } else {
    res.json({
      message: 'Invalid User Input'
    })
  }

})

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('games').where('id', id)
    .then((data) => {
      res.json(data);
    })
})

router.put('/:id', (req, res) => {
  if (validate(req.body)) {
    let id = req.params.id
    let name = req.body.name
    let publisher = req.body.publisher
    let release = req.body.release

    knex('games').where('id', id)
      .update({
        name: name,
        publisher: publisher,
        release: release
      }).returning('*')
      .then((data) => {
        res.send(data)
      })
  } else {
    res.json({
      message: 'Invalid User Input'
    })
  }
})

router.delete('/:id', (req, res) => {
  let id = req.params.id

  knex('games').where('id', id)
    .del()
    .then(() => {
      res.json({
        message: 'Success'
      })
    })
})

module.exports = router;

function validate(data) {
  let verifyName = typeof data.name == 'string' && data.name.trim() != ''
  let verifyPublisher = typeof data.publisher == 'string' && data.publisher.trim() != ''
  let verifyRelease = typeof data.release == 'number'

  return verifyName && verifyPublisher && verifyRelease
}
