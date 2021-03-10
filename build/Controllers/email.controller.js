"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailController = void 0;
const config_1 = require("../Config/config");
class EmailController {
    static async sendEmail(req, res) {
        const nodemailer = require('nodemailer');
        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config_1.default.EMAIL,
                pass: config_1.default.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: config_1.default.EMAIL,
            to: config_1.default.EMAIL_RECEIVER,
            subject: 'Contacto ARM - ' + req.body.name,
            text: 'Correo: ' + req.body.email + '\n\nMensaje: ' + req.body.message + '\n\nMuchas Gracias, ' + req.body.name
        };
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                // console.log(error);
                return res.json(0);
            }
            else {
                // console.log('Email sent: ' + info.response);
                return res.json(1);
            }
        });
    }
}
exports.EmailController = EmailController;
//# sourceMappingURL=email.controller.js.map