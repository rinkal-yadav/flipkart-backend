import mongoose from "mongoose";

export  const Connection = async (URL) => {
  
    try {
      await  mongoose.connect(URL,{ useUnifiedTopology:true,useNewUrlParser:true })
      console.log("Database Connected successfully");
    }
    catch (error) {
        console.log('error while connecting with the database', error.message);
    }
}

export default Connection


// @Rinkal1996