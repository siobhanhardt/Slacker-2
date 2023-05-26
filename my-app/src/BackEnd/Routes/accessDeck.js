const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://slackergroup:password1234@cluster0-slacker.bgbmpvv.mongodb.net/slack?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.post("/", async (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    console.log("processing req");
    // Connect to the database
    await client.connect();

    const collection = client.db("slack").collection("users");

    // find user
    const user = await collection.findOne({
      email: email,
    });

    if (user) {
      res.json({
        code: 1,
        cards: user.cards,
      });
    } else {
      res.json({
        code: 0,
        message: "find failed",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error accessing the deck." });
  } finally {
    // ensure that the client will close when you finish/error
    await client.close();
  }
});

module.exports = {
  accessDeck: router,
};
