import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

let transporter = nodemailer.createTransport({
    host: process.env.HOST_MAILTRAP,       // smtp.gmail.com
    port: Number(process.env.PORT_MAILTRAP),  // 465
    secure: true,                          // SSL para puerto 465
    auth: {
        user: process.env.GMAIL_USER.trim(),
        pass: process.env.GMAIL_PASS.trim(),
    }
});

const sendMailToRegister = (userMail, token) => {
    let mailOptions = {
        from: `"SmartVET" <${process.env.GMAIL_USER.trim()}>`,
        to: userMail,
        subject: "SmartVET -🐶 😺",
        html: `<p>Hola, haz clic <a href="${process.env.URL_FRONTEND}confirm/${token}">aquí</a> para confirmar tu cuenta.</p>
        <hr>
        <footer>El equipo de SmartVET te da la más cordial bienvenida.</footer>
        `
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("Error enviando correo: ", error);
        } else {
            console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
        }
    });
};

const sendMailToRecoveryPassword = async(userMail,token) => {
    let info = await transporter.sendMail({
        from: `"SmartVET" <${process.env.GMAIL_USER.trim()}>`,
        to: userMail,
        subject: "Correo para reestablecer tu contraseña",
        html: `
        <h1>SmartVET - 🐶 😺</h1>
        <hr>
        <a href=${process.env.URL_FRONTEND}reset/${token}>Clic para reestablecer tu contraseña</a>
        <hr>
        <footer>El equipo de SmartVET te da la más cordial bienvenida.</footer>
        `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
};



const sendMailToOwner = async(userMail,password)=>{
    let info = await transporter.sendMail({
    from: 'admin@vet.com',
    to: userMail,
    subject: "Correo de bienvenida - Propietario de la mascota",
    html: `
    <h1>SmartVET - 🐶 😺</h1>
    <hr>
    <p>Contraseña de acceso: ${password}</p>
    <a href=${process.env.URL_BACKEND}login>Clic para iniciar sesión</a>
    <hr>
    <footer>El equipo de SmartVET te da la más cordial bienvenida.</footer>
    `
    });
    console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
}





export {
    sendMailToRegister,
    sendMailToRecoveryPassword,
    sendMailToOwner
};
