const express = require("express");
const router = express.Router();

// Creating route to get all the coins in the nomics database
router.get("/", async (req, res) => {
  res.status(200).json({
    hola: "adios",
  });
});

module.exports = router;
