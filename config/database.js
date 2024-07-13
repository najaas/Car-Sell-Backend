const mongoose=require('mongoose')

const connect=async()=>{

    try{
        await mongoose.connect("mongodb://localhost:27017/NewProject")
        console.log('database connected');
    }catch{
        console.log(`${err} error database`);
    }
}

module.exports=connect;
