const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  content: String // Ity no tsy hita raha tsy efa voavidy
});

module.exports = mongoose.model('Course', CourseSchema);