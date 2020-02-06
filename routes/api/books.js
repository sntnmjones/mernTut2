const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');

// test route
router.get('/test', (req, res) => res.send('book route test'));

// get all books
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404)
            .json({error: 'No book found'}));
});

// get one book
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
  });

// add/save book
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book added'}))
        .catch(err => res.status(400)
            .json({error: 'Unable to add book'}))
})
module.exports = router;