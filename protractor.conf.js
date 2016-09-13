exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:9000/',

    specs: ['./e2e/dialog-A.e2e-spec.js','./e2e/dialog-B-spec.e2e.js'],
    capabilities: {
        browserName: 'chrome'
    },

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    }
};
