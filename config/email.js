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



import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    await transporter.verify(); // check connection

    await transporter.sendMail({
      from: `"Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: subject,
      text: message,
    });

    console.log('✅ Email sent to:', email);
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw error; // IMPORTANT: let API know it failed
  }
};

export default sendEmail;
