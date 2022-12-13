
import mongoose from "mongoose";



export const Connection=async(username,password)=>{

  const URL=`mongodb://${username}:${password}@ac-xrmcdlg-shard-00-00.knctcgm.mongodb.net:27017,ac-xrmcdlg-shard-00-01.knctcgm.mongodb.net:27017,ac-xrmcdlg-shard-00-02.knctcgm.mongodb.net:27017/?ssl=true&replicaSet=atlas-hum9yy-shard-0&authSource=admin&retryWrites=true&w=majority`;  
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log('Database connected sucesfully');
        
    } catch (error) {
        console.log('error while connecting with database',error.message);
        
    }
}

export default Connection;