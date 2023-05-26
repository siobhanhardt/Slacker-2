const express = require("express");

// Create a new router
const router = express.Router();

// Import the EpicCardRequests module
const EpicCardRequests = require("../CardRequests/EpicCardRequests");

// Define a route handler for the root path of the router
router.get("/", async (req, res) => {
  try {
    // Call the `getCards` function from the `EpicCardRequests` module
    const response = await EpicCardRequests.getCards(req.query);
    // Send a JSON response with a status code of 200 (OK)
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    // If an error occurs, send a JSON response with a status code of 500 (Internal Server Error)
    res.status(500).json({ error: "Not found" });
  }
});

// Export the router as `accessEpicCardsRoutes`
module.exports = {
  accessEpicCardsRoutes: router,
};
