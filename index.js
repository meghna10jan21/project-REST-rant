
// Modules and Globals
require('dotenv').config()
const express = require('express')
//const { set } = require('express/lib/application')
const methodOverride = require('method-override')
const places = require('./Models/places')


// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.use(express.urlencoded({ extended: true }))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('places')
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


      
app.get('*', (req, res) => {
 res.status(404).send('<h1>404 Page</h1>')
})

//Listen for Connections
app.listen(process.env.PORT)
