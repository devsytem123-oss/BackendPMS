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



import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_KEY);

const sendEmail = async (email, subject, message) => {
  try {
    await resend.emails.send({
      from: 'devsytem123@gmail.com',
      to: email,
      subject,
      text: message,
    });

    console.log('✅ Email sent via Resend');
  } catch (error) {
    console.error('❌ Resend email failed:', error);
    throw error;
  }
};

export default sendEmail;


