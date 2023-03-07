const express = require("express");

const { getAllMovies, getMovieById, postMovie, upDateMovie, deleteMovie } = require("../controller/movieController");
const { verifyToken } = require("../middlewares/tokenHandler")

const router = express.Router()


router.get("/", getAllMovies);
router.get("/:id", getMovieById);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX WALL WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

router.use(verifyToken)

router.post("/post", postMovie);
router.put("/update", upDateMovie);
router.delete("/delete", deleteMovie);

module.exports = router;