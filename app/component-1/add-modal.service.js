angular.module('app.component1')
    .service('AddModalService', ['$http', function($http) {
        'use strict';

        var book = {
            title: '',
            author: '',
            genre: '',
            year: ''
        };

        this.save = function(title, author, genre, year) {

            book.title = title;
            book.author = author;
            book.genre = genre;
            book.year = year;

            this.post(book);
        };

        this.post = function(book) {
            $http({
                method: 'POST',
                url: '/books',
                data: book
            }).then(function successCallback(response) {
                alert('SUCCEED ' + response.status);
            }, function errorCallback(response) {
                alert('FAILED ' + response.status + '\n Title:' + book.title + '\n Author:' + book.author + '\n Genre:' + book.genre + '\n Year:' + book.year);
            });
        };

    }]);
