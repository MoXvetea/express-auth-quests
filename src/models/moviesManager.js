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
        // const movie = await db.query("SELECT * FROM movies WHERE id=?", [id])
        const [movie] = await db.query("SELECT * FROM movies WHERE id=?", [id])
        return movie;
    } catch(error) {
        console.error(error);
    }
};

module.exports = { findAllMovies, findMovieById };