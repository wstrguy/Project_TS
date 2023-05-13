// Creating Database

// Importing mongoose 
 import mongoose from 'mongoose'

 mongoose.set('strictQuery', true);

//  const monConnect: string = process.env.MONGO_URI

 const connDb = async () => {
    try {
        await mongoose.connect(String(process.env.MONGO_URI))
        console.log('Database Connected Sucessfully');
        
    } catch (error) {
        console.log('Error connecting to DB');
    }
 }


 export default connDb;