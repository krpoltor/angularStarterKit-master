angular.module('app.component1')
    .service('CrudService', ['$http', function($http) {
        'use strict';

        this.post = function(book) {
            $http({
                method: 'POST',
                url: '/books',
                data: book
            }).then(function successCallback(response) {
                alert('SUCCEED ' + response.status);
            }, function errorCallback(response) {
                alert('FAILED ' + response.status + '\n Title: ' + book.title + '\n Author: ' + book.author + '\n Genre: ' + book.genre + '\n Year: ' + book.year);
            });
        };

        this.put = function(book) {
            $http({
                method: 'PUT',
                url: '/books',
                data: book
            }).then(function successCallback(response) {
                alert('SUCCEED ' + response.status);
            }, function errorCallback(response) {
                alert('FAILED ' + response.status + '\n Title: ' + book.title + '\n Author: ' + book.author + '\n Genre: ' + book.genre + '\n Year: ' + book.year);
            });
        };

    }]);