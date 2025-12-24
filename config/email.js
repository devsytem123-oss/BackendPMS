// import nodemailer from 'nodemailer'
// const sendEmail=async(email,subject,message)=>{
//     const transporter=nodemailer.createTransport({
//         service: "gmail",
        
//         auth:{
//             user:process.env.EMAIL_USER,
//             pass:process.env.EMAIL_PASS
//         }
//     })

//     await transporter.sendMail({
//         from:process.env.EMAIL_USER,
//         to:email,
//         subject,
//         text:message
//     })
// }



// export default sendEmail


import nodemailer from "nodemailer";

const sendEmail = async (email, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",   
      port: 587,                
      secure: false,            
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    
    await transporter.verify();

    await transporter.sendMail({
      from: `"My App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: subject,
      text: message,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email send failed:", error);
    throw error;
  }
};

export default sendEmail;
