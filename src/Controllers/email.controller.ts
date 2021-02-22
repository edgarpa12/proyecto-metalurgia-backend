import { Request, Response } from 'express';
import CONFIG from '../Config/config';


export class EmailController {

    public static async sendEmail(req: Request, res: Response) {
        const nodemailer = require('nodemailer');

        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: CONFIG.EMAIL,
                pass: CONFIG.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: CONFIG.EMAIL,
            to: CONFIG.EMAIL_RECEIVER,
            subject: 'Contacto ARM - ' + req.body.name,
            text: 'Correo: ' + req.body.email + '\n\nMensaje: ' + req.body.message + '\n\nMuchas Gracias, ' + req.body.name
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                // console.log(error);
                return res.json(0);
            } else {
                // console.log('Email sent: ' + info.response);
                return res.json(1);
            }
        });
    }
}