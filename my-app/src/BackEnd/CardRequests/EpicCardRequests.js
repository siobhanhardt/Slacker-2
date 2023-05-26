const { MongoClient } = require("mongodb");
const connect = require("../connect"); // Update the path to your connect.js file

// Create a new instance of the MongoClient class
const client = new MongoClient(connect.database.url);

// Keep track of the connection status
let isConnected = false;

// A function to retrieve cards from the database
async function getCards(request) {
  // Destructure the id from the request object
  const { id } = request;
  console.log("getting epic card");

  try {
    // Connect to the database if not already connected
    if (!isConnected) {
      await client.connect();
      isConnected = true;
    }

    // Get a reference to the "slack" database
    const db = client.db("slack");
    // Get a reference to the "cardsCommon" collection
    const cardsEpic = db.collection("cardsEpic");

    // Search the "cardsCommon" collection for a document with an id equal to the provided id
    const result = await cardsEpic.find({ id: parseInt(id) }).toArray();

    // Check if the result is not empty
    if (result.length > 0) {
      console.log(result[0].id + "," + result[0].name);
    } else {
      console.log("No results found for the provided id");
    }

    // Return the result
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Export the `getCards` function
module.exports = {
  getCards,
};
