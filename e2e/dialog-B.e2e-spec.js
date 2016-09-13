/* eslint-disable */
var DialogB_PO = require('./PO/dialog-B.po.js');

describe('app tests', function() {
    'use strict';

    var pageObj;

    beforeEach(function() {
        pageObj = new DialogB_PO();
    });

    it('should check first book - no filter', function() {
        pageObj.getHomePage();

        var books = element.all(by.repeater('book in data.books'));

        browser.waitForAngular();

        expect(books.count()).toBe(10);

    });

    it('should check first book - it filter', function() {
        pageObj.getHomePage();

        var rows = element.all(by.repeater('book in data.books')).first(),
            cells = rows.all(by.tagName('td')),
            cellText = cells.map(function(elem) {
                return elem.getText();
            });

        browser.waitForAngular();

        expect(cellText).
        toEqual([pageObj.config.sampleITBookTitle, pageObj.config.sampleITBookAuthor, pageObj.config.sampleITBookGenre, pageObj.config.sampleITBookYear]);

    });

    it('should check filters headers', function() {
        pageObj.getHomePage();

        var headers = element.all(by.className('uibTabElem'));

        expect(headers.count()).toBe(6);
    });

    it('should check first book - crime filter', function() {
        pageObj.getHomePage();

        element(by.name('Crime')).click();

        var rows = element.all(by.repeater('book in data.books')).first(),
            cells = rows.all(by.tagName('td')),
            cellText = cells.map(function(elem) {
                return elem.getText();
            });

        browser.waitForAngular();

        expect(cellText)
            .toEqual([pageObj.config.sampleCrimeBookTitle, pageObj.config.sampleCrimeBookAuthor, pageObj.config.sampleCrimeBookGenre, pageObj.config.sampleCrimeBookYear]);


    });

    it('should check first book - test filter', function() {
        pageObj.getHomePage();

        element(by.name('Test')).click();

        var rows = element.all(by.repeater('book in data.books')).first(),
            cells = rows.all(by.tagName('td')),
            cellText = cells.map(function(elem) {
                return elem.getText();
            });

        browser.waitForAngular();

        expect(cellText)
            .toEqual([pageObj.config.sampleTestBookTitle, pageObj.config.sampleTestBookAuthor, pageObj.config.sampleTestBookGenre, pageObj.config.sampleTestBookYear]);

    });

    it('should check first book - bork filter', function() {
        pageObj.getHomePage();

        element(by.name('Bork')).click();

        var rows = element.all(by.repeater('book in data.books')).first(),
            cells = rows.all(by.tagName('td')),
            cellText = cells.map(function(elem) {
                return elem.getText();
            });

        browser.waitForAngular();

        expect(cellText)
            .toEqual([pageObj.config.sampleBorkBookTitle, pageObj.config.sampleBorkBookAuthor, pageObj.config.sampleBorkBookGenre, pageObj.config.sampleBorkBookYear]);

    });

    it('should check first book - foo filter', function() {
        pageObj.getHomePage();

        element(by.name('Foo')).click();

        var rows = element.all(by.repeater('book in data.books')).first(),
            cells = rows.all(by.tagName('td')),
            cellText = cells.map(function(elem) {
                return elem.getText();
            });

        browser.waitForAngular();

        expect(cellText)
            .toEqual([pageObj.config.sampleFooBookTitle, pageObj.config.sampleFooBookAuthor, pageObj.config.sampleFooBookGenre, pageObj.config.sampleFooBookYear]);

    });

});