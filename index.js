const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello DevOps! \nDenys Liienko IS-02')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})