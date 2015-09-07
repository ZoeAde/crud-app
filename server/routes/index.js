var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

//create book library and new instances
function Library() {
  this.libraryArray = [];
  this.id = 0;
}

Library.prototype.addBook = function(name, author, pages, genre) {
  var tempBook = {"name": name, "author":author, "pages": pages, "genre":genre, "id": this.id};
  this.id += 1;
  this.libraryArray.push(tempBook);
};

var Books = new Library();

//get all books
router.get('/books', function(req, res, next) {
  res.json(Books.libraryArray);
});

//get single book
router.get('/book/:id', function(req, res, next) {
  res.json(Books.libraryArray[req.params.id]);
});

//post all books
router.post('/books', function(req, res, next){
  res.json(book);
});

//put single book
// router.put('/books', function(req, res, next) {
//   res.json(Books.libraryArray[req.body.name])
// });

//delete single book
// routher.delete('/book/:name', function(req, res, next) {
//   //splice named book from array based on id
// });


module.exports = router;
