import  express  from "express";
import { appendFile } from "fs";

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("hello this is the auth endpoint")
})

router.get('/register', (req, res) =>{
    res.send("hello this is the register endpoint")
})

export default router