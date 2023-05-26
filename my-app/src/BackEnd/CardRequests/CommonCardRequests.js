const { MongoClient } = require("mongodb");
const connect = require("../connect"); // Update the path to your connect.js file

let db;
let isConnected = false;

// A function to connect to the database
async function connectToDb() {
  if (!isConnected) {
    const client = await MongoClient.connect(connect.database.url, {
      useUnifiedTopology: true,
    });
    db = client.db("slack");
    isConnected = true;
  }
}

// A function to retrieve cards from the database
async function getCards(request) {
  // Destructure the id from the request object
  const { id } = request;
  console.log("getting card");

  try {
    // Connect to the database if not already connected
    await connectToDb();

    // Get a reference to the "cardsCommon" collection
    const cardsCommon = db.collection("cardsCommon");

    // Search the "cardsCommon" collection for a document with an id equal to the provided id
    const result = await cardsCommon.find({ id: parseInt(id) }).toArray();

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
