angular.module('app.component1').controller('MyFirstController', function($scope, $http, $modal, books) {
    'use strict';

    $scope.data = {
        books: []
    };

    angular.copy(books.data, $scope.data.books);

    $scope.add = function() {
        $modal.open({
            templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'AddModalController',
            size: 'lg'
        });
    };

    //TODO: service + post + put

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

}).controller('AddModalController', function($scope, $modalInstance) {
    'use strict';

    $scope.data = {
        form: []
    };

    $scope.exit = function() {
        $modalInstance.close();
    };

}).controller('EditModalController', function($scope, $modalInstance, selectedBook) {
    'use strict';

    $scope.data = {
        form: [],
        selectedBook: {}
    };

    angular.copy(selectedBook, $scope.data.selectedBook);

    $scope.exit = function() {
        $modalInstance.close();
    };

});
