//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('places')
})

      
app.get('*', (req, res) => {
 res.status(404).send('<h1>404 Page</h1>')
})

//Listen for Connections
app.listen(process.env.PORT)
