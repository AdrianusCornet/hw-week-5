const express = require('express')

const app = express()
const port = 4000

app.listen(port, () => console.log(`lisenign on port: ${port}`))

app.get('/bla', (request, response) => {
  console.log('hallo from bla')
  response.send('bla bla')
})
