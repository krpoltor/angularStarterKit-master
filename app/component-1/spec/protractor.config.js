/*eslint-disable*/
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['dialog-A.spec.js','dialog-B.spec.js'],
    capabilities: {
        browserName: 'chrome'
    }
};
