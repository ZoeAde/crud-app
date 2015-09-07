var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book = new Schema ({
  title: String,
  author: String,
  pages: Number,
  genre: String,
});

mongoose.model('book', Book);
mongoose.connect('mongodb://localhost/crud-assessment');
