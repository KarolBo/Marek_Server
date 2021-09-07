const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

const port = 1500

app.post('/', (req, res) => {
  res.send('To jest odpowiedz z servera! ;)')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})