const { findAllUsers, findUserById, signUp, upDate } = require("../models/usersManager");


const getAllUsers = async (req, res) => {
    try {
        const users = await findAllUsers();
        res.json(users)
    } catch (error) {
        console.error(error);
    }
}
const getUserById = async (req, res) => {
    const id = (req.params.id)
    try {
        const user = await findUserById(id);
        res.json(user)
    } catch (error) {
        console.error(error);
    }
}

const postUser = async (req, res) => {
    const newProfile = req.body;
    try {
        signUp(newProfile)
        res.sendStatus(200)
    } catch (error) {
        console.error(error);
    }
}

const upDateUser = async (req, res) => {
    const modifiedProfile = req.body
    try {
        upDate(modifiedProfile)
        res.sendStatus(200)
    } catch(error) {
        console.error(error);
    }
}
module.exports = { getAllUsers, getUserById, postUser, upDateUser };