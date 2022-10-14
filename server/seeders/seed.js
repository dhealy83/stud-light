const db = require("../config/connection");

const { User, Collection, Card } = require("../models");
const { collection } = require("../models/Card");

const userSeeds = require("./userSeed.json");
const cardSeeds = require("./cardSeed.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Collection.deleteMany({});
    await Card.deleteMany({});
    // Create user
    // Create collection
    // update user so collection is attached to them

    // for (const i of cardSeeds) {
    //   console.log(i);
    //   const currentCard = await Card.create("cards"[{}]);
    // }

    // for of used for arrays
    // for (const i of userSeeds) {
    //   const currentCard = await Card.create(i.cards);
    //   collectionCard = currentCard.map((obj) => obj._id);
    //   const currentCollection = await Collection.create(i.collections);
    //   const collectionID = currentCollection.map((obj) => obj._id);
    //   await User.create({
    //     username: i.username,
    //     email: i.email,
    //     password: i.password,
    //     collections: { collectionID, cards: [collectionCard] },
    //   });
    // }

    console.log("All seeded");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
