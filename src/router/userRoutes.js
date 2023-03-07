const express = require("express");
const app = require("../../app");

const { getAllUsers, getUserById, postUser, upDateUser, getUserWithPasswordAndPassToNext, } = require("../controller/userController");
const { HashPassword, DeHashPassword, } = require("../middlewares/passwordHandlers");
const { sendToken, verifyToken } = require ("../middlewares/tokenHandler.js")

const router = express.Router()

router.post("/register", HashPassword, postUser)
router.post("/login", getUserWithPasswordAndPassToNext, DeHashPassword, sendToken)
router.get("/", getAllUsers);
router.get("/:id", getUserById)
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX WALL WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

router.use(verifyToken);

router.put("/update", HashPassword, upDateUser)
module.exports = router;