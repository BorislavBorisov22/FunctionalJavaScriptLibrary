const fs = require('fs');
const path = require('path');

const srcPath = './src';

const R = fs.readdirSync(path.join(__dirname, srcPath)).reduce((R, currentFileName) => {
    if (!currentFileName.includes('.js')) {
        return R;
    }

    const fieldName = currentFileName.split('.')[0];
    R[fieldName] = require(path.join(__dirname, srcPath, currentFileName));
    return R;
}, {});

module.exports = R;
