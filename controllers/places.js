const router = require ('express').Router()
const router = require ('../Models/places.js')

router.get ('/:id/edit', (req, res) => {
    let id = Number (req.params.id)
    if (isNaN(id)){
    res.render('error404')
}
else if(!places[id]){
  res.render('error404')
}
else {
  res.render('places/edit', {place: places[id]})
}  
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

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
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

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})



module.exports = router