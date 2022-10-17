const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
// this is implemented so we don't have to use '../' when importing files.
// it gives the directory of the main process (app.js) which is the main directory
