const router = require("express").Router();
const db = require("../models");

//INDEX
router.get('/', (req, res) => {
  db.Place.find()
      .then((places) => {
          res.render('places/index', { places })
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})


//CREATE
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

//NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

//GET BY ID
router.get('/:id', (req, res) => {
  db.Place.findOne({ _id: req.params.id })
      .populate('comments')
      .then(place => {
          console.log(place.comments)
          res.render('places/show', { place })
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

//UPDATE
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
      .then(() => {
          res.redirect('/places')
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
      .then(place => {
          res.render('places/edit', { place })
      })
      .catch(err => {
          res.render('error404')
      })
})

router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;