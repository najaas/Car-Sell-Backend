const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"najaspuramchalil@gmail.com",
        pass:"hrmw bjyu xhce pgzn"
    }
})

module.exports=transporter