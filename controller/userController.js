const userdata=require('../models/Userdata')
const transporter=require('../Middleware/nodemailer')

module.exports = {
  signupPost: async (req, res) => {
    console.log(req.body);
    const {
      firstName,
      lastName,
      email,
      phonenumber,
      password,
      confirmPassword,
    } =req.body;

    const data={
      firstName,
      lastName,
      email,
      phonenumber,
      password,
      confirmPassword
    }        

    // nodemailer 
    const mailOptions = {
      from: 'najaspuramchalil@gmail.com',
      to:req.body.email,
      subject: "subject", 
      text: '<h1>Welcome</h1><p>This is an HTML email</p>'
    };
    transporter.sendMail(mailOptions,(error)=>{
      if(error){
        console.log("mail error");
    }else{
      console.log("successfully");
    }
  })
    const newuser= await userdata.create(data)
    newuser.save
    
  },
};
