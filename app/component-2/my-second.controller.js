angular.module('app.component2')
.controller('MySecondController', ['$scope', 'BooksFactory', function($scope, BooksFactory) {
    'use strict';

    $scope.data = {
        books: []
    };

    BooksFactory.getBooks().success(function(response) {
        $scope.data.books = response;
    });

    $scope.panes = [{
        title: 'None',
        content: '',
        active: true
    }, {
        title: 'IT',
        content: 'it'
    }, {
        title: 'Crime',
        content: 'crime'
    }, {
        title: 'Test',
        content: 'test'
    }, {
        title: 'Bork',
        content: 'bork'
    }, {
        title: 'Foo',
        content: 'foo'
    }];

    $scope.active = function() {
        return $scope.panes.filter(function(pane) {
            return pane.active;
        })[0];
    };

    $scope.getFilter = function() {
        return $scope.active().content;
    };

}]);
