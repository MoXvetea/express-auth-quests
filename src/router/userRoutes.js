const express = require("express");

const { getAllUsers, getUserById, postUser, upDateUser } = require("../controller/userController");
const { HashPassword } = require("../middlewares/passwordHandlers");

const router = express.Router()

router.get("/", getAllUsers);
router.get("/:id", getUserById)
router.post("/signup", HashPassword, postUser)
router.put("/update", HashPassword, upDateUser)
module.exports = router;