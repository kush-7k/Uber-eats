import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('YOur MONGODB DATABASE CONNECTION STRING').then(()=>console.log("DB Connected"));
   
}

