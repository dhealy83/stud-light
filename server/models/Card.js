const { Schema } = require("mongoose");

const cardSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});

module.exports = cardSchema;
