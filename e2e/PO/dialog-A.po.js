/*eslint-disable*/
'use strict';

var config = {

    url: 'http://localhost:9000/#/component-1/dialog-a',

    sampleITBookTitle: 'Code Complete',
    sampleITBookAuthor: 'Steve McConnell',
    sampleITBookGenre: 'it',
    sampleITBookYear: '1999'

};

function DialogA_PO() {
    this.config = config;
}


DialogA_PO.prototype.getHomePage = function() {
    browser.get(config.url);

};

module.exports = DialogA_PO;
