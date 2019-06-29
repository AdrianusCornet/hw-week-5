const { Router } = require('express')
const Test = require('../db')

const router = new Router

router.get(
  '/test',
  (request, response, next) => Test
    .findAll()
    .then(tests => {
      console.log('hello from test')
      response.send({ tests })
    })
    .catch(next)
)

module.exports = router