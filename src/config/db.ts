import * as mongoose from 'mongoose';
import CONFIG from './config';

mongoose
    .connect(CONFIG.DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: false,
        useCreateIndex: true,
        dbName: CONFIG.DB_NAME
    })
    .then(() => {
        console.log('mongodb is connected');
    })
    .catch(error => {
        console.log('mongodb not connected');
        console.log(error);
        process.exit();
    });