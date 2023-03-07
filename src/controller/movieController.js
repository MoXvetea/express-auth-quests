const { findAllMovies } = require("../models/moviesManager");
const { findMovieById } = require("../models/moviesManager")

const getAllMovies = async (req, res) => {
  try {
    const movies = await findAllMovies();
    res.json(movies)
  } catch (error) {
    console.error(error);
  }
}
const getMovieById = async (req, res) => {
  const id = (req.params.id)
  try {
    const movie = await findMovieById(id);
    res.json(movie)
  } catch (error) {
    console.error(error);
  }
}
module.exports = { getAllMovies, getMovieById };



