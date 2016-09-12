angular.module('app.component1')
    .controller('MyFirstController', function($scope, $http, $modal, BooksFactory, AddModalService, EditModalService, VerifyService) {
        'use strict';

        $scope.data = {
            books: [],
            book: [],
            form: {}
        };

        //  $scope.data.books = BooksFactory.getBooks();

        BooksFactory.getBooks().success(function(response) {
            $scope.data.books = response;
        });

        $scope.add = function() {
            $scope.modalInstance = $modal.open({
                templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
                //controller: 'AddModalController',
                size: 'lg'
            });
        };

        $scope.save = function() {

            if (VerifyService.verify(
                    $scope.data.form.bookTitle.$modelValue,
                    $scope.data.form.bookAuthor.$modelValue,
                    $scope.data.form.bookGenre.$modelValue,
                    $scope.data.form.bookYear.$modelValue)) {

                // if (typeof $scope.selectedBook == 'undefined') {
                //
                //     AddModalService.save(
                //         $scope.data.form.bookTitle.$modelValue,
                //         $scope.data.form.bookAuthor.$modelValue,
                //         $scope.data.form.bookGenre.$modelValue,
                //         $scope.data.form.bookYear.$modelValue);
                // } else {
                //     EditModalService.save($scope.data.form.bookTitle.$modelValue,
                //         $scope.data.form.bookAuthor.$modelValue,
                //         $scope.data.form.bookGenre.$modelValue,
                //         $scope.data.form.bookYear.$modelValue);
                // }

                $scope.data.book.title = '';
                $scope.data.book.author = '';
                $scope.data.book.genre = '';
                $scope.data.book.year = '';
                //$scope.data.form.$setPristine();

            } else {
                alert('Fill all neccessary fields.');
            }
        };

        //

        $scope.edit = function() {
            $scope.modalInstance = $modal.open({
                templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
                size: 'lg'
                // resolve: {
                //     selectedBook: function() {
                //         return $scope.data.books[$scope.selectedRowIndex];
                //     }
                // }
            });
        };

        $scope.selectRow = function(index) {
            $scope.selectedRowIndex = index;
        };

        $scope.exit = function() {
            $scope.modalInstance.dismiss();
        };

    });
