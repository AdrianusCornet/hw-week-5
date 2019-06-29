// inports
const express = require('express')
const { Client } = require('pg')

// constant valus
const port = process.env.PORT || 4000
const connectionString = 'postgresql://postgres:week-5@localhost:5432/postgres'

// init's
const app = express()
const client = new Client({ connectionString })

// code body
app.listen(port, () => console.log(`lisenign on port: ${port}`))

// is the sever up?
app.get('/ping', (request, response) => {
  console.log('ping pong')
  response.send('pong')
})
// test 
app.get('/test/:id', (request, response) => {
  const testId = request.params.id

  client.query('SELECT * FROM test WHERE id = $1', [testId] , (dbError, dbResponse) => {
    if(dbError) {
      // internal server error
      response
        .status(500)
        .send({
          message: 'server error',
          details: dbError.message
        })
    } else if (dbResponse.rows[0]) {
      response.send(dbResponse.rows[0])
    } else {
      response
        .status(404)
        .send({
          message: 'i dont have that data'
        })
    }
  })
})

client.connect()
