// inports
const express = require('express')

// constant valus
const port = process.env.PORT || 4000

// init's
const app = express()

// code body
app.listen(port, () => console.log(`lisenign on port: ${port}`))

// is the sever up?
app.get('/ping', (request, response) => {
  console.log('ping pong')
  response.send('pong')
})
