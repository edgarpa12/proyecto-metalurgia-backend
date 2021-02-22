import { Request, Response } from 'express';


export class EmailController {

    public static async sendEmail(req: Request, res: Response) {
        const nodemailer = require('nodemailer');

        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'contacto.arm.sa@gmail.com',
                pass: 'ContactoARM1234'
            }
        });

        const mailOptions = {
            from: 'contacto.arm.sa@gmail.com',
            to: 'contacto.arm.sa@gmail.com',
            subject: 'Contacto ARM - ' + req.body.name,
            text: 'Correo: ' + req.body.email + '\n\nMensaje: ' + req.body.message + '\n\nMuchas Gracias, ' + req.body.name
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.json(0);
            } else {
                console.log('Email sent: ' + info.response);
                return res.json(1);
            }
        });
    }
}