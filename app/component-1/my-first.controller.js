angular.module('app.component1')

.controller('MyFirstController', function($scope, $http, $modal, books) {
    'use strict';

    $scope.books = null;

    $http.get('/component-1/books.json')
        .success(function(data) {
            $scope.books = data;
        })
        .error(function(data, status, error, config) {
            $scope.books = [{
                title: 'Error',
                author: 'Could not load json data'
            }];
        });


}).controller('MyModalController', function($scope, $modalInstance, selectedBook) {
    'use strict';

});
