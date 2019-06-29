const express = require('express')

const app = express()
const port = process.env.PORT || 4000

app.listen(port, () => console.log(`lisenign on port: ${port}`))

// is the sever up?
app.get('/ping', (request, response) => {
  console.log('ping pong')
  response.send('pong')
})
