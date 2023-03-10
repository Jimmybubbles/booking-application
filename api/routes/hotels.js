import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router()

// CREATE 
router.post("/", createHotel)

// UPDATE
router.put("/:id", updateHotel)

// DELETE
router.delete("/:id", deleteHotel)

// GET single hotel
router.get("/:id", getHotel)

// GETALL
router.get("/", getHotels)



export default router;