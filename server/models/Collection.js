const { Schema, model } = require("mongoose");
// const Cards = require("./Card");

const collectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
});

const Collection = model("Collection", collectionSchema);

module.exports = Collection;
