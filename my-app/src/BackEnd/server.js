const connect = require("./connect");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const { accessCommonCardsRoutes } = require("./Routes/accessCommonCards");
const { accessRareCardsRoutes } = require("./Routes/accessRareCards");
const { accessEpicCardsRoutes } = require("./Routes/accessEpicCards");
const { accessLegendaryCardsRoutes } = require("./Routes/accessLegendaryCards");
const { userLoginRoutes } = require("./Routes/userLogin");
const { accessDeck } = require("./Routes/accessDeck");
const { uploadCardRoutes } = require("./Routes/storeCardsRoute");

// Use the body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// CORS middleware
app.use((req, res, next) => {
  setCorsHeaders(res);
  // If the request method is "OPTIONS", send a response with the headers and end the request
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  next();
});

// Use the `accessCommonCardsRoutes` router for requests to the `/cardsCommon` endpoint
app.use("/cardsCommon", accessCommonCardsRoutes);
app.use("/cardsRare", accessRareCardsRoutes);
app.use("/cardsEpic", accessEpicCardsRoutes);
app.use("/cardsLegendary", accessLegendaryCardsRoutes);
app.use("/login", userLoginRoutes);
app.use("/findDeckCards", accessDeck);
app.use("/uploadCard", uploadCardRoutes);

// A function to connect to the MongoDB database
async function main() {
  try {
    // Create a new instance of the MongoClient class
    const client = new MongoClient(connect.database.url);
    // Connect to the database
    await client.connect();
    console.log("connection successful");
  } catch (error) {
    console.error(error);
  }
}

// A function to set the CORS headers in the response
function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
}

// Start the express app and listen on port 8080
app.listen(8080, () => {
  console.log("Server listening on port 8080");
  // Call the `main` function
  main();
});
