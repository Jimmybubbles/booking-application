import mongoose from "mongoose";

mongoose.connect(
    process.env.MONGOD_URI || 'mongodb://127.0.0.1:27017/bookingSite', {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }
)

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
}),

mongoose.connection.on("connected", () => {
    console.log('mongoDB connected!')
})  

module.exports = mongoose.connection