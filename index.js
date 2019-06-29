// inports
const express = require('express')
const bodyParser = require('body-parser')
// -routers
const authenticationRouter = require('./authentication/router')
const testrouter = require('./test/router')
// -models

// constant valus
const port = process.env.PORT || 4000
const jsonParser = bodyParser.json()

// init's
const app = express()

// routers
app.listen(port, () => console.log(`lisenign on port: ${port}`))
app.use(jsonParser)
app.use(authenticationRouter)

// can the server respond
app.get('/ping', (request, response) => {
  console.log('ping pong')
  response.send('pong')
})

/* old code

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:week-5@localhost:5432/postgres'


const client = new Client({ connectionString })

// code body

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
*/