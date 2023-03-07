const { findAllMovies, findMovieById, addMovie, upDateDatas, eraseMovie } = require("../models/moviesManager");


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

const postMovie = async (req, res) => {
  const newMovie = req.body;
  try {
    addMovie(newMovie)
    res.sendStatus(200)
  } catch (error) {
    console.error(error);
  }
}

const upDateMovie = async (req, res) => {
  const modifiedMovie = req.body
  try {
    upDateDatas(modifiedMovie)
    res.sendStatus(200)
  } catch (error) {
    console.error(error);
  }
}

const deleteMovie = async (req, res) => {
  const movieToDelete = req.body
  try {
    eraseMovie(movieToDelete)
    res.sendStatus(200)
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getAllMovies, getMovieById, postMovie, upDateMovie, deleteMovie };



