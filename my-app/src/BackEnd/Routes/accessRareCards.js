const express = require("express");

// Create a new router
const router = express.Router();

// Import the RareCardRequests module
const RareCardRequests = require("../CardRequests/RareCardRequests");

// Define a route handler for the root path of the router
router.get("/", async (req, res) => {
  try {
    // Call the `getCards` function from the `RareCardRequests` module
    const response = await RareCardRequests.getCards(req.query);
    // Send a JSON response with a status code of 200 (OK)
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    // If an error occurs, send a JSON response with a status code of 500 (Internal Server Error)
    res.status(500).json({ error: "Not found" });
  }
});

// Export the router as `accessRareCardsRoutes`
module.exports = {
  accessRareCardsRoutes: router,
};
