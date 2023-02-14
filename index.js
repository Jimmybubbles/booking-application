import express from 'express'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose';
dotenv.config();


const app = express()

// wrap the connection async so that when the port connects the db is also connected.
const connect = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
    } catch (error) {
        throw(error);
    }
}

// if there is a disconnect on the db
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected check it out.")
})

// api test 
app.get('/', (req, res) => {
    res.send('this is the test that the api works')
})

app.listen(8000, () => {
    connect()
    console.log("app listening on port 8000")
})

