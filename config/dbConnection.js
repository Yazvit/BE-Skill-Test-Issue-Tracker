const mongoose = require("mongoose")

// Making Connecting with mongoDB
const connectDb = async ()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://yazvits:QWE0sH8Y61UtP45G@atlascluster.aijnrnd.mongodb.net/IssueTracker")
        
        console.log("Database Connected: ", connect.connection.name)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}
// Exporting the function 
module.exports = connectDb;