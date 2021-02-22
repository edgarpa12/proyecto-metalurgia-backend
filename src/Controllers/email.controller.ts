import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

export class EmailController {

    public static async sendEmail(req: Request, res: Response) {
        const nodemailer = require('nodemailer');

        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL || "contacto.arm.sa@gmail.com",
                pass: process.env.EMAIL_PASS || "ContactoARM1234",
            }
        });

        const mailOptions = {
            from: process.env.EMAIL || "contacto.arm.sa@gmail.com",
            to: process.env.EMAIL_RECEIVER || "edgdav00@gmail.com",
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