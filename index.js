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

client.connect()
