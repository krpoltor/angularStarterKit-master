angular.module('app.component1')
    .service('VerifyService', function() {
        'use strict';

        // In-case of someone removing the "data-ng-disabled" field in modal-dialog.tpl.html in "Save button"
        this.verify = function(title, author, genre, year) {
            return !(this.isUndefined(title, author, genre, year) || this.isEmpty(title, author, genre, year));
        };

        this.isUndefined = function(title, author, genre, year) {
            return (typeof title == 'undefined' || typeof author == 'undefined' || typeof year == 'undefined');
        };

        this.isEmpty = function(title, author, genre, year) {
            return (title === '' || author === '' || year === '');
        };

    });
