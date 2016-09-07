angular.module('app.component2').controller('MySecondController', function($scope, BooksFactory) {
    'use strict';

    $scope.data.books = BooksFactory;

    $scope.data = {
        books: []
    };

});
