import mongoose from "mongoose";

export const connectDB = ()=>{
mongoose
.connect(process.env.MONGO_URL,{
    dbName: "backendAPI1",})
    .then(()=> console.log("Connected to MongoDB"))
    .catch((err)=> console.log(err))};