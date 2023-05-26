const express = require("express");

// Create a new router
const router = express.Router();

// Import the CommonCardRequests module
const CommonCardRequests = require("../CardRequests/CommonCardRequests");

// Define a route handler for the root path of the router
router.get("/", async (req, res) => {
  try {
    const card = await CommonCardRequests.getCards(req.query);
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Export the router as `accessCommonCardsRoutes`
module.exports = {
  accessCommonCardsRoutes: router,
};
