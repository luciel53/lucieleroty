import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, firstname, email, phone, company, subject, message } =
    await req.json();

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "contact@eyetopixel.com",
    to: "contact@eyetopixel.com",
    subject: subject,
    text: `Nom: ${name}\nPrénom: ${firstname}\nSociété: ${company}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage: ${message}\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "L\'email a bien été envoyé." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l\'envoi de l\'email", error);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l\'envoi de l\'email" }),
      { status: 500 }
    );
  }
}
