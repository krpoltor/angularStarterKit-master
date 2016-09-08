angular.module('app.component1')
    .controller('EditModalController', ['$scope', '$modalInstance', '$http', 'selectedBook', function($scope, $modalInstance, $http, selectedBook) {
        'use strict';

        var book = {
            title: '',
            author: '',
            genre: '',
            year: ''
        };

        $scope.data = {
            form: [],
            book: []
        };

        angular.copy(selectedBook, $scope.data.book);

        $scope.save = function() {
            if (!$scope.data.form.bookTitle.$invalid &&
                !$scope.data.form.bookAuthor.$invalid &&
                !$scope.data.form.bookGenre.$invalid &&
                !$scope.data.form.bookYear.$invalid) {

                book.title = $scope.data.form.bookTitle.$modelValue;
                book.author = $scope.data.form.bookAuthor.$modelValue;
                book.genre = $scope.data.form.bookGenre.$modelValue;
                book.year = $scope.data.form.bookYear.$modelValue;

                $http({
                    method: 'PUT',
                    url: '/books',
                    data: book
                }).then(function successCallback(response) {
                    alert('SUCCEED' + response.status);
                }, function errorCallback(response) {
                    alert('FAILED' + response.status + '\n' + book.title + '\n' + book.author + '\n' + book.genre + '\n' + book.year);
                });
            }
        };

        $scope.exit = function() {
            $modalInstance.close();
        };

    }]);