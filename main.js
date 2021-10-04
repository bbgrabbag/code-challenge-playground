const fs = require('fs');

const files = fs.readdirSync('./challenges');

files.forEach(file => {
    const challenge = file.replace('.js', '');
    module.exports[challenge] = require('./challenges/' + file);
});