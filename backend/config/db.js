import mongoose from 'mongoose'

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sreepramukhreddy:k9912778356@cluster0.vx96p7z.mongodb.net/Taskanker')
    .then (()=> console.log('DB connected successfully'));
}
