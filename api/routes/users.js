import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";


const router = express.Router()

// check user is authenticated
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user you are now logged in")
})


// UPDATE
router.put("/:id", updateUser)

// DELETE
router.delete("/:id", deleteUser)

// GET single hotel
router.get("/:id", getUser)

// GETALL
router.get("/", getUsers)

export default router