const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://slackergroup:password1234@cluster0-slacker.bgbmpvv.mongodb.net/slack?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  console.log("loginng in with", email, password);
  try {
    await client.connect();
    const collection = client.db("slack").collection("users");
    const user = await collection.findOne({ email: email });

    // if user not found in the database
    if (!user) {
      res.status(400).json({ error: "Invalid email or password" });
      return;
    }

    // if user found then check the password in the database
    if (user.password !== password) {
      res.status(400).json({ error: "Invalid email or password" });
      return;
    }

    // user found & password matched
    // Here you can issue a token, set a cookie, or however you handle successful authentication.
    res.status(200).json({ code: 1, user: email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to login" });
  } finally {
    await client.close();
  }
});

module.exports = {
  userLoginRoutes: router,
};
