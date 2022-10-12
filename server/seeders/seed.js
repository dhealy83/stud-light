const db = require("../config/connection");

const { User, Collection, Card } = require("../models");

const userSeeds = require("./userSeed.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Collection.deleteMany({});
    // Create user
    // Create collection
    // update user so collection is attached to them

    // for of used for arrays
    for (const i of userSeeds) {
      const currentCollection = await Collection.create(i.collections);
      const collectionID = currentCollection.map((obj) => obj._id);
      await User.create({
        username: i.username,
        email: i.email,
        password: i.password,
        collections: collectionID,
      });
    }

    console.log("All seeded");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
