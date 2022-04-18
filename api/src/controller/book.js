const Book = require("../models/BookModel");

const index = (req, res) => {
  Book.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const indexById = (req, res) => {
  Book.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const create = (req, res) => {
  const newBook = new Book({
    bookName: req.body.bookName,
    author: req.body.author,
    quantity: req.body.quantity,
    department: req.body.department,
    comments: req.body.comments,
  });
  return newBook
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteById = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const lentBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const backBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, { $inc: { quantity: 1 } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  index,
  indexById,
  create,
  deleteById,
  backBook,
  lentBook,
};
