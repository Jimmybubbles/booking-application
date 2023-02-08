import express from "express"
import dotenv from "dotenv"

import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import userRoute from './routes/user.js'

const app = express()

// middleware
app.use('auth', authRoute)
app.use('hotels', authRoute)
app.use('rooms', authRoute)
app.use('user', authRoute)


app.listen(8000, () => {
    console.log('application listening on port 8000 ')
})

