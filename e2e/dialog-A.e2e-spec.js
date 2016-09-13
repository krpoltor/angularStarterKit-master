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

        expect(cellText).toEqual(
            [pageObj.config.sampleITBookTitle,
                pageObj.config.sampleITBookAuthor,
                pageObj.config.sampleITBookGenre,
                pageObj.config.sampleITBookYear
            ]);
    });

    it('should open add modal', function() {
        pageObj.getHomePage();

        pageObj.clickAddButton();

        browser.waitForAngular();

        expect(pageObj.isModalOpen()).toBe(true);

    });

    it('should open add modal with empty fields', function() {
        pageObj.getHomePage();

        pageObj.clickAddButton();

        browser.waitForAngular();

        expect(pageObj.getBookTitle()).toEqual('');
        expect(pageObj.getBookAuthor()).toEqual('');
        expect(pageObj.getBookGenre()).toEqual('');
        expect(pageObj.getBookYear()).toEqual('');
    });


    it('should open edit modal', function() {
        pageObj.getHomePage();

        pageObj.clickFirstBook();

        pageObj.clickEditButton();

        browser.waitForAngular();

        expect(element(by.className('modal-content')).isDisplayed()).toBe(true);

    });

    it('should open edit modal with loaded data', function() {
        pageObj.getHomePage();

        pageObj.clickFirstBook();

        pageObj.clickEditButton();

        browser.waitForAngular();

        expect(pageObj.getBookTitle()).toEqual(pageObj.config.sampleITBookTitle);
        expect(pageObj.getBookAuthor()).toEqual(pageObj.config.sampleITBookAuthor);
        expect(pageObj.getBookGenre()).toEqual(pageObj.config.sampleITBookGenre);
        expect(pageObj.getBookYear()).toEqual(pageObj.config.sampleITBookYear);

    });



});