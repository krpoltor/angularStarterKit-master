angular.module('app.component1')
    .controller('AddModalController', ['$scope', '$modalInstance', 'CrudService', 'VerifyService', function($scope, $modalInstance, CrudService, VerifyService) {
        'use strict';

        var book = {
            title: '',
            author: '',
            genre: '',
            year: ''
        };

        $scope.data = {
            form: [],
            book: {}
        };

        $scope.save = function() {
            if (VerifyService.verify(
                    $scope.data.form.bookTitle.$modelValue,
                    $scope.data.form.bookAuthor.$modelValue,
                    $scope.data.form.bookYear.$modelValue)) {

                book.title = $scope.data.form.bookTitle.$modelValue;
                book.author = $scope.data.form.bookAuthor.$modelValue;
                book.genre = $scope.data.form.bookGenre.$modelValue;
                book.year = $scope.data.form.bookYear.$modelValue;

                CrudService.post(book);
            } else {
                alert('Fill all neccessary fields.');
            }
        };

        $scope.exit = function() {
            $modalInstance.close();
        };

    }]);