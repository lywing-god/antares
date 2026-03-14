// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-check
const fs = require('fs');
const path = require('path');
const https = require('https');
const unzip = require('unzip-crx-3');
const { antares } = require('../package.json');

const extensionID = antares.devtoolsId;
const chromiumVersion = '124';
const destFolder = path.resolve(__dirname, `../misc/${extensionID}`);
const filePath = path.resolve(__dirname, `${destFolder}/${extensionID}.crx`);
const fileUrl = `https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${extensionID}%26uc&prodversion=${chromiumVersion}`;
const forceDownload = process.argv.includes('--force');
const manifestPath = path.resolve(destFolder, 'manifest.json');

if (!fs.existsSync(destFolder))
   fs.mkdirSync(destFolder, { recursive: true });

const downloadFile = url => {
   return /** @type {Promise<void>} */(new Promise((resolve, reject) => {
      const request = https.get(url);

      request.on('response', response => {
         if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
            return downloadFile(response.headers.location)
               .then(resolve)
               .catch(reject);
         }

         const fileStream = fs.createWriteStream(filePath);
         response.pipe(fileStream);

         response.on('close', () => {
            console.log('Devtools download completed!');
            resolve();
         });
         response.on('error', reject);
      });
      request.on('error', reject);
      request.end();
   }));
};

(async () => {
   try {
      if (!forceDownload && fs.existsSync(manifestPath)) {
         console.log('Devtools already installed, skipping download.');
         process.exit();
      }

      await downloadFile(fileUrl);
      await unzip(filePath, destFolder);
      fs.unlinkSync(filePath);
      const extensionPackageJson = `${destFolder}/package.json`;
      if (fs.existsSync(extensionPackageJson))
         fs.unlinkSync(extensionPackageJson);// <- Avoid to display annoyng npm script in vscode
      process.exit();
   }
   catch (error) {
      console.log(error);
   }
})();
