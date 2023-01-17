/* MONGODB CONNECTION CALLING */
//import mongoose, { ConnectOptions } from 'mongoose';

/* BUILDS THE ENVRIONMENT */
import '@config/methods/environment.builder';
/* EXPRESS APP FROM App.ts */
import app from '@app';
/* GLOBAL CONFIGURATION FILE */
import Config from '@config/index.config';
import fs from 'fs';
import path from 'path';
import config from '@constants/company.data';
import cron from 'node-cron';
import cp from 'child_process';

/* CREATES FILES FOLDER */
if (!fs.existsSync(path.join(__dirname, '../', 'files'))) {
    fs.mkdirSync(path.join(__dirname, '../', 'files'));
}

/* CREATES COMPANY FOLDER UNDER FILES */
if (!fs.existsSync(path.join(__dirname, '../', 'files', config?.COMPANY))) {
    fs.mkdirSync(path.join(__dirname, '../', 'files', config?.COMPANY));
}

/* CREATES TMP FILES FOLDER */
if (!fs.existsSync(path.join(__dirname, '../', 'files', config?.COMPANY, 'TMP'))) {
    fs.mkdirSync(path.join(__dirname, '../', 'files', config?.COMPANY, 'TMP'));
}


cron.schedule('0 3 * * 5', () => {
    console.log('Update server task at 03:00 at Friday');
    cp.execSync('chmod +x server-update.sh', { stdio: 'inherit' });

    cp.exec(path.resolve('server-update.sh'), function (err, stdout, stderr) {
        // handle err, stdout, stderr
        console.log(err, stdout, stderr);
    });
});


app.listen(Config?.PORT, () => {
    console.log(Config?.PORT)
    console.log("SERVER RUNNING: ", true);
})

export default app;