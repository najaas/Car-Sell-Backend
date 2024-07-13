const mongoose=require('mongoose')

const Details= new mongoose.Schema({
    
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    phonenumber:{
        type:Number
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    }

})

module.exports=mongoose.model('userlogindetails',Details)