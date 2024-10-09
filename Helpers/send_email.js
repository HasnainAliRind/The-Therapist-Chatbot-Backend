// Importing modules
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import {Resend} from "resend";



dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// Create a transporter instance using connection pooling
// const transporter = nodemailer.createTransport({
//   service: process.env.EMAIL_SERVICE,
//   host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAILPASS,
//   },
// });

// Function to send email to the user
const sendingMail = async ({ from, to, subject, text }) => {
  try {
    // const mailOptions = {
    //   from,
    //   to,
    //   subject,
    //   text,
    // };

    // // Wrap sendMail in a Promise
    // const info = await new Promise((resolve, reject) => {
    //   transporter.sendMail(mailOptions, (err, info) => {
    //     if (err) {
    //       console.error('Error sending email:', err);
    //       reject(err);
    //     } else {
    //       console.log('Email sent:', info.response);
    //       resolve(info);
    //     }
    //   });
    // });

    // return info; // Optionally return the info object
    

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: to,
      subject: subject,
      text: text
    });
  
    if (error) {
      console.log(error);
      
    }
  
   console.log(data);
   


  } catch (error) {
    console.log('Error sending email:', error);
  }
};

export default sendingMail;
