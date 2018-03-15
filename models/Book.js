// import { Buffer } from 'buffer';

var mongoose = require('mongoose');

const bookSchema = mongoose.Schema({

title: String,
author: String,
ratings: String,
created:{
    type: Date,
    default: Date.now
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;