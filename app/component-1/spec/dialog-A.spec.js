/* eslint-disable */
var DialogA_PO = require('./PO/dialog-A.po.js');

describe('app tests', function() {
    'use strict';

    var pageObj;

    beforeEach(function() {
        pageObj = new DialogA_PO();
    });

    it('should check first book', function() {
        pageObj.getHomePage();

        var rows = element.all(by.repeater('book in data.books')).first(),
            cells = rows.all(by.tagName('td')),
            cellText = cells.map(function(elem) {
                return elem.getText();
            });

        browser.waitForAngular();

        expect(cellText).toEqual(['Code Complete', 'Steve McConnell', 'it', '1999']);
    });

    it('should open add modal', function() {
        pageObj.getHomePage();

        element(by.id('addButton')).click();

        browser.waitForAngular();

        expect(element(by.className('modal-content')).isDisplayed()).toBe(true);

    });

    it('should open add modal with empty fields', function() {
        pageObj.getHomePage();

        element(by.id('addButton')).click();
        var bookTitle = element(by.name('bookTitle')).getAttribute('value'),
            bookAuthor = element(by.name('bookAuthor')).getAttribute('value'),
            bookGenre = element(by.name('bookGenre')).getAttribute('value'),
            bookYear = element(by.name('bookYear')).getAttribute('value');

        browser.waitForAngular();

        expect(bookTitle).toEqual('');
        expect(bookAuthor).toEqual('');
        expect(bookGenre).toEqual('');
        expect(bookYear).toEqual('');
    });


    it('should open edit modal', function() {
        pageObj.getHomePage();

        element.all(by.repeater('book in data.books')).first().click();

        element(by.id('editButton')).click();

        browser.waitForAngular();

        expect(element(by.className('modal-content')).isDisplayed()).toBe(true);

    });

    it('should open edit modal with loaded data', function() {
        pageObj.getHomePage();

        element.all(by.repeater('book in data.books')).first().click();

        element(by.id('editButton')).click();

        browser.waitForAngular();

        var bookTitle = element(by.name('bookTitle')).getAttribute('value'),
            bookAuthor = element(by.name('bookAuthor')).getAttribute('value'),
            bookGenre = element(by.name('bookGenre')).getAttribute('value'),
            bookYear = element(by.name('bookYear')).getAttribute('value');

        browser.waitForAngular();

        expect(bookTitle).toEqual('Code Complete');
        expect(bookAuthor).toEqual('Steve McConnell');
        expect(bookGenre).toEqual('it');
        expect(bookYear).toEqual('1999');

    });



});
