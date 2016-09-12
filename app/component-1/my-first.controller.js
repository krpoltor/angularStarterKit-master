angular.module('app.component1')
    .controller('MyFirstController', function($scope, $http, $modal, BooksFactory) {
        'use strict';

        $scope.data = {
            books: []
        };

        //  $scope.data.books = BooksFactory.getBooks();

        BooksFactory.getBooks().success(function(response) {
            $scope.data.books = response;
        });

        $scope.add = function() {
            $modal.open({
                templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
                controller: 'AddModalController',
                size: 'lg'
            });
        };

        $scope.edit = function() {
            $modal.open({
                templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
                controller: 'EditModalController',
                size: 'lg',
                resolve: {
                    selectedBook: function() {
                        return $scope.data.books[$scope.selectedRowIndex];
                    }
                }
            });
        };

        $scope.selectRow = function(index) {
            $scope.selectedRowIndex = index;
        };

    });
