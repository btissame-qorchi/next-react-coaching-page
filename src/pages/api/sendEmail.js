// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configuration de Nodemailer (utilisez votre propre service SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.yoursmtpserver.com",
      port: 587,
      secure: false,
      auth: {
        user: "your-email@example.com",
        pass: "your-email-password",
      },
    });

    try {
      // Envoi de l'email
      await transporter.sendMail({
        from: email,
        to: "your-email@example.com",
        subject: `Nouveau message de ${name}`,
        text: message,
      });

      res.status(200).json({ message: "Email envoyé avec succès!" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de l'envoi de l'email.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Méthode ${req.method} non autorisée` });
  }
}
