import  express  from "express";

import { createHotel } from "../controllers/hotel.js"

const router = express.Router()

// create 

router.post("/", createHotel)



export default router;