angular.module('app.component1')
    .service('VerifyService', function() {
        'use strict';

        // In-case of someone remove the "data-ng-disabled" field in modal-dialog.tpl.html in "Save button"
        this.verify = function(title, author, year) {
            return !(this.isUndefined(title, author, year) || this.isEmpty(title, author, year));
        };

        this.isUndefined = function(title, author, year) {
            return (typeof title == 'undefined' || typeof author == 'undefined' || typeof year == 'undefined');
        };

        this.isEmpty = function(title, author, year) {
            return (title === '' || author === '' || year === '');
        };

});
