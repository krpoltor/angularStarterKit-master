/* eslint-disable */
describe('app tests', function() {
    'use strict';

    it('should check first book - no filter', function() {
        browser.get("http://localhost:9000/#/component-2/dialog-b");

        var books = element.all(by.repeater("book in data.books"));

        browser.waitForAngular();

        expect(books.count()).toBe(10);

    });

    it('should check first book - it filter', function() {
        browser.get("http://localhost:9000/#/component-2/dialog-b");

        var rows = element.all(by.repeater("book in data.books")).first(),
            cells = rows.all(by.tagName('td')),
            cellText = cells.map(function(elem) {
                return elem.getText();
            });

        browser.waitForAngular();

        expect(cellText).toEqual(["Code Complete", "Steve McConnell", "it", "1999"]);

    });

    it('should check first book - crime filter', function() {
        browser.get("http://localhost:9000/#/component-2/dialog-b");

        var pane = element.all(by.repeater('pane in panes')).get(1);

        expect(pane.context).toEqual('Crime');

        // element(by.repeater('pane in panes')).get(1).click();
        //
        // var rows = element.all(by.repeater("book in data.books")).first(),
        //     cells = rows.all(by.tagName('td')),
        //     cellText = cells.map(function(elem) {
        //         return elem.getText();
        //     });
        //
        // browser.waitForAngular();
        //
        // expect(cellText).toEqual(["Crime crime", "Crime 42 crime never changes.	", "crime", "2081"]);

    });

});
