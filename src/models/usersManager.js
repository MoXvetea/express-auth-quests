const db = require("./db");

const findAllUsers = async () => {
    try {
        const [users] = await db.query("SELECT firstname, lastname, email, city, language  FROM users");
        return users;
    } catch (error) {
        console.error(error);
    }
};

const findUserById = async (id) => {
    try {
        const [user] = await db.query("SELECT firstname, lastname, email, city, language FROM users WHERE id=?", [id])
        return user;
    } catch (error) {
        console.error(error);
    }
};

const verifyPassword = async (identification) => {
    try {
        const [userDb] = await db.query(
            `SELECT id, firstname, lastname, email, city, language, hashedPassword FROM users WHERE email=? `,
            [identification.email]
        )
        return userDb
    } catch (error) {
        console.error(error);
    }
}

const signUp = async (newProfile) => {
    try {
        db.query(
            `INSERT INTO users (firstname, lastname, email, city, language, hashedPassword) VALUES (?, ?, ?, ?, ?, ?)`,
            [
                newProfile.firstname,
                newProfile.lastname,
                newProfile.email,
                newProfile.city,
                newProfile.language,
                newProfile.hashedPassword,
            ]
        )
    } catch (error) {
        console.error(error);
    }
}

const upDateProfile = async (modifiedProfile) => {
    console.log(modifiedProfile);
    try {
        db.query(`UPDATE users SET hashedPassword = ? WHERE email = ?`,
            [modifiedProfile.hashedPassword, modifiedProfile.email])
    } catch (error) {
        console.error(error);
    }
}

module.exports = { findAllUsers, findUserById, signUp, upDateProfile, verifyPassword };