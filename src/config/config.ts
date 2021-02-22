import * as dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: <string>process.env.PORT,
    EMAIL: <string>process.env.EMAIL,
    EMAIL_PASS: <string>process.env.EMAIL_PASS,
    EMAIL_RECEIVER: <string>process.env.EMAIL_RECEIVER,
};
