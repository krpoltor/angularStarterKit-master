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

DialogA_PO.prototype.clickAddButton = function() {
    element(by.id('addButton')).click();
};

DialogA_PO.prototype.clickEditButton = function() {
    element(by.id('editButton')).click();
};

DialogA_PO.prototype.clickFirstBook = function() {
    element.all(by.repeater('book in data.books')).first().click();
};



DialogA_PO.prototype.getBookTitle = function() {
    return element(by.name('bookTitle')).getAttribute('value');
};

DialogA_PO.prototype.getBookAuthor = function() {
    return element(by.name('bookAuthor')).getAttribute('value');
};

DialogA_PO.prototype.getBookGenre = function() {
    return element(by.name('bookGenre')).getAttribute('value');
};

DialogA_PO.prototype.getBookYear = function() {
    return element(by.name('bookYear')).getAttribute('value');
};

DialogA_PO.prototype.isModalOpen = function() {
    return element(by.className('modal-content')).isDisplayed();
};


module.exports = DialogA_PO;
