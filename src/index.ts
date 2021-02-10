import app from './App';
import CONFIG from './config/config';
import './config/db';

app.listen(CONFIG.PORT, function () {
    console.log(`App is listening on port ${CONFIG.PORT}`);
});
