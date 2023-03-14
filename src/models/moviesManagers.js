const db = require("./db");

const findAllMovies = async () => {
try{
    const [movies] = await db.query("SELECT * FROM movies");
    return movies;
} catch (error){
    console.error(error);
}
};
const findMovieById = async (id) =>{
    try {
        const [movie] = await db.query("SELECT * FROM movies WHERE id=?", [id])
        return movie;
    } catch(error) {
        console.error(error);
    }
};

const addMovie = async (newMovie) => {
    try {
        db.query(
            `INSERT INTO movies (title, director, year, color, duration) VALUES (?, ?, ?, ?, ?)`,
            [
                newMovie.title,
                newMovie.director,
                newMovie.year,
                newMovie.color,
                newMovie.duration,
                
            ]
        )
    } catch (error) {
        console.error(error);
    }
}

const upDateDatas = async (modifiedMovie) => {
    console.log(modifiedMovie);
    try {
        db.query(`UPDATE movies SET color = ? WHERE title = ?`,
            [modifiedMovie.color, modifiedMovie.title])
    } catch (error) {
        console.error(error);
    }
}

const eraseMovie = async (movieToDelete) => {
    console.log(movieToDelete);
    try {
        db.query(`DELETE FROM movies WHERE title = ?`,
            [movieToDelete.title])
    } catch (error) {
        console.error(error);
    }
}

module.exports = { findAllMovies, findMovieById, addMovie, upDateDatas, eraseMovie };