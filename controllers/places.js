const router = require ('express').Router()
const router = require ('../Models/places.js')

router.get ('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.png'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
      }]
      
    res.render ('places/index', {places})
})

  router.post('/', (req, res) => {

      if (!req.body.pic) {
    // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
  }
    if (!req.body.city) {
    req.body.city = 'Anytown'
  }
    if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
   res.redirect('/places')
})


module.exports = router