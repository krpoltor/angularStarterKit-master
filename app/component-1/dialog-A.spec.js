/* eslint-disable */
describe('app tests', function() {
    'use strict';

    it('should check first book', function() {
        browser.get("http://localhost:9000/#/component-1/dialog-a");

        var rows = element.all(by.repeater("book in data.books")).first(),
            cells = rows.all(by.tagName('td')),
            cellText = cells.map(function(elem) {
                return elem.getText();
            });

        browser.waitForAngular();

        expect(cellText).toEqual(["Code Complete", "Steve McConnell", "it", "1999"]);
    });

    it('should open add modal', function() {
        browser.get("http://localhost:9000/#/component-1/dialog-a");

        element(by.id('addButton')).click();

        browser.waitForAngular();

        expect(element(by.className('modal-content')).isDisplayed()).toBe(true);

    });

    it('should open add modal with empty fields', function() {
        browser.get("http://localhost:9000/#/component-1/dialog-a");

        element(by.id('addButton')).click();

        //browser.waitForAngular();

        expect(element(by.name("bookTitle"))).toEqual("");

        //expect(element(by.name("bookAuthor"))).toEqual("");
        //expect(element(by.name("bookGenre"))).toEqual("");
        //expect(element(by.name("bookYear"))).toEqual("");
    });


    it('should open edit modal', function() {
        browser.get("http://localhost:9000/#/component-1/dialog-a");

        element.all(by.repeater("book in data.books")).first().click();

        element(by.id('editButton')).click();

        browser.waitForAngular();

        expect(element(by.className('modal-content')).isDisplayed()).toBe(true);

    });

    it('should open edit modal with loaded data', function() {
        browser.get("http://localhost:9000/#/component-1/dialog-a");

        element.all(by.repeater("book in data.books")).first().click();

        element(by.id('editButton')).click();

        browser.waitForAngular();

        expect(element(by.name("bookTitle"))).toEqual("Code Complete");

    });



});
