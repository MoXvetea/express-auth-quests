const express = require("express");
const app = require("../../app");

const { getAllUsers, getUserById, postUser, upDateUser, getUserWithPasswordAndPassToNext, } = require("../controller/userController");
const { HashPassword, DeHashPassword, } = require("../middlewares/passwordHandlers");
const { sendToken, verifyToken } = require ("../middlewares/tokenHandler.js")

const router = express.Router()

router.post("/signup", HashPassword, postUser)
router.post("/login", getUserWithPasswordAndPassToNext, DeHashPassword, sendToken)
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX WALL WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

router.use(verifyToken);

router.get("/", getAllUsers);
router.get("/:id", getUserById)
router.put("/update", HashPassword, upDateUser)
module.exports = router;