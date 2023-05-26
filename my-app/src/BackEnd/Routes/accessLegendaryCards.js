const express = require("express");

// Create a new router
const router = express.Router();

// Import the LegendaryCardRequests module
const LegendaryCardRequests = require("../CardRequests/LegendaryCardRequests");

// Define a route handler for the root path of the router
router.get("/", async (req, res) => {
  try {
    // Call the `getCards` function from the `LegendaryCardRequests` module
    const response = await LegendaryCardRequests.getCards(req.query);
    // Send a JSON response with a status code of 200 (OK)
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    // If an error occurs, send a JSON response with a status code of 500 (Internal Server Error)
    res.status(500).json({ error: "Not found" });
  }
});

// Export the router as `accessLegendaryCardsRoutes`
module.exports = {
  accessLegendaryCardsRoutes: router,
};
