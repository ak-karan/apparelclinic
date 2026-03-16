// api/send-email.js
import nodemailer from 'nodemailer';

export default async function sendEmail({ to, subject, html, from }) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    const info = await transporter.sendMail({
      from: from || `"Apparel Clinic" <${process.env.EMAIL_USER}>`,
      to: to || process.env.EMAIL_TO,
      subject: subject,
      html: html,
    });

    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}