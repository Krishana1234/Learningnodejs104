const mongoose = require("mongoose")


exports.connectDatabase = async()=>{
    // connecting to database 
// jaba samma database sanga connect hudainw wait gar
 await mongoose.connect("mongodb+srv://krishana123:hello@cluster0.nhayh1d.mongodb.net/?retryWrites=true&w=majority")
 console.log("Database connected successfully")
}