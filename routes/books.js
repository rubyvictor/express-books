var express = require("express");
var router = express.Router();
var Book = require("../models/Book");

/* GET books listing. */
router.get("/", async function(req, res) {
  try {
    const books = await Book.find({}).exec();
    res.send(books);
  } catch (err) {
    console.log(res.status(404),err.message);
  }
});

router.get("/:title", async function(req, res) {
  try {
    let title = req.params.title;
    const book = await Book.findOne({ title }).exec();
    res.send(book);
  } catch (err) {
    console.log(res.status(404),err.message);
  }
});

router.get("/:id", async function(req, res) {
  try {
    let id = req.params.id;
    const book = await Book.findById(id).exec();
    res.send(book);
  } catch (err) {
    console.log(res.status(404),err.message);
  }
});

router.post("/", async function(req, res) {
  try {
    let title = req.body.title;
    let author = req.body.author;
    let ratings = req.body.ratings;
    const newBook = new Book({
      title: title,
      author: author,
      ratings: ratings
    });
    await newBook.save();
    res.send({ "Successfully created": newBook });
  } catch (error) {
    console.log(res.status(404),error.message);
  }
});

router.put("/:id", async function(req, res) {
  try {
    let id = req.params.id;
    let updatedBook = {
      title: req.body.title,
      author: req.body.author,
      ranking: req.body.ranking,
    };
    const result = await Book.findByIdAndUpdate(id, updatedBook, {
      new: true
    }).exec();
    res.send(result);
  } catch (error) {
    console.log(res.status(404),error.message);
  }
});

router.delete("/:id", async function(req, res) {
  try {
    let id = req.params.id;
    const result = await Book.findByIdAndRemove(id).exec();
    res.send(result);
  } catch (error) {
    console.log(res.status(404),error.message);
  }
});

module.exports = router;
