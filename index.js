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
// test 1
app.get('/test1', (request, response) => {
  client.query('SELECT * FROM test', (dbError, dbResponse) => {
    if(dbError) {
      // internal server error
      response
        .status(500)
        .send({
          message: 'server error',
          details: dbError.message
        })
    } else if (dbResponse.rowCount) {
      response.send(dbResponse.rows)
    } else {
      response
        .status(404)
        .send({
          message: 'i dont have data'
        })
    }
  })
})

client.connect()
