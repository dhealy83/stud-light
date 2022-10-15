const db = require("../config/connection");

const { User, Collection, Card } = require("../models");
const { collection } = require("../models/Card");

const userSeeds = require("./userSeed.json");
const cardSeeds = require("./cardSeed.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Collection.deleteMany({});
    await Collection.deleteMany({});
    // Create user
    // Create collection
    // update user so collection is attached to them

    // for (const i of cardSeeds) {
    //   console.log(i);
    //   const currentCard = await Card.create("cards"[{}]);
    // }

    console.log("All seeded");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
