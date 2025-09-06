




const express = require('express')
const app = express()

// Route  handler
app.get('/', function (req, res) {
    // all things related to request
  res.send('Hello World')
})
app.get('/', function (req, res) {
  res.send('Hello from the asd endpoint')
})

app.listen(3000) // which port 
//////////////////////////////////////////////////////////////////



// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)