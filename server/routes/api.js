var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = mongoose.model('book');


router.get('/users', function(req, res) {
  Book.find(function(err, book) {
    res.json(books);
  });
});

router.post('/', function(req, res) {
  new Book({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    genre: req.body.genre
  })
  .save(function(err, book) {
    res.json({book: book, message: 'new book added'});
  });
});

router.put("/book/:title", function(req, res) {
  var query = {"title": req.params.title};
  var update = req.body;
  User.findOneAndUpdate(query, update, {new: true}, function(err, book) {
    res.json(book);
  });
});

router.delete("/book/:title", function(req, res) {
  var query = {"title": req.params.title};
  Book.findOneAndRemove(query, function(err, book) {
    res.json(book);
  });
});

module.exports = router;
