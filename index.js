import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './api/routes/auth.js'
import hotelsRoute from './api/routes/hotels.js'
import roomsRoute from './api/routes/rooms.js'
import usersRoute from './api/routes/users.js'
import cookieParser from 'cookie-parser';
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

// api middleware
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

// add error handler middleware 
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8000, () => {
    connect()
    console.log("app listening on port 8000")
})

