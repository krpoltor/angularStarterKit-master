angular.module('app.component2').controller('MySecondController', function($scope, BooksFactory) {
    'use strict';

    $scope.data = {
        books: []
    };
    // 
    // BooksFactory.getBooks().success(function(response) {
    //     $scope.data.books = response;
    // });



}).controller('TabsDemoCtrl', function($scope) {
    'use strict';

    $scope.panes = [{
        title: "None",
        content: "%",
        active: true
    }, {
        title: "IT",
        content: "it"
    }];

    $scope.test = 'it';

    $scope.active = function() {
        return $scope.panes.filter(function(pane) {
            return pane.active;
        })[0];
    };

});
