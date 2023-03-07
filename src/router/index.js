const movieRoutes = require("../router/movieRoutes");
const userRoutes = require("../router/userRoutes");
const express = require("express");

const router = express.Router();

router.use("/movie", movieRoutes);
router.use("/users", userRoutes);

module.exports = router;

