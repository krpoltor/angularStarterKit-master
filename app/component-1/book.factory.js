angular.module('app.component1')
    .factory('BooksFactory', ['$http', function($http) {
        'use strict';

        var factory = {
        };

        factory.getBooks = function() {
            return $http.get('/component-1/books.json');
        };

        return factory;

    }]);
