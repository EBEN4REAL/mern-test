import mongoose from "mongoose";
import jsonloggers from 'cookie-loggers'


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/reactjs-food-delivery-app').then(()=>{
        console.log('DB connected') ;
        jsonloggers();
    })
}