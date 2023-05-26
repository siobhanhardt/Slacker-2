const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://slackergroup:password1234@cluster0-slacker.bgbmpvv.mongodb.net/slack?retryWrites=true&w=majority";
let client;
let collection;

async function start() {
  client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  collection = client.db("slack").collection("users");

  router.post("/", async (req, res, next) => {
    console.log("receiving a request to store");
    console.log(req.body); // This will print the request body

    if (!collection) {
      res.status(500).json({ error: "Database connection not established" });
      return;
    }

    try {
      console.log("Storing card");
      if (!req.body.email) {
        throw new Error("Missing email in request body");
      }

      const card = await collection.findOne({ email: req.body.email });

      if (card) {
        const totalArray = card.cards.concat(req.body.cardList || []);
        let includeArray = [];

        totalArray.forEach((item) => {
          if (!includeArray.includes(item.id)) {
            includeArray.push(item.id);
          }
        });

        includeArray = includeArray.map((item) => {
          return totalArray.find((findItem) => findItem.id === item);
        });

        await collection.updateOne(
          { email: req.body.email },
          {
            $set: {
              cards: includeArray,
            },
          }
        );

        res.send({
          code: 1,
          message: "ok!",
        });
      } else {
        res.send({
          code: 0,
          message: "update failed",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to upload card" });
    }
  });
}

start().catch(console.error);

module.exports = {
  uploadCardRoutes: router,
};
