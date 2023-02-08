import express  from "express";
import hotels from "../models/hotels.js";


const router = express.Router();

// CREATE
router.post("", async (req, res) => {
    
    const newHotel = new hotels(req.body)
    
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }

})
// UPDATE

// DELETE

// GET

// GETALL 


export default router