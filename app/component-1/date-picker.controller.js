angular.module('app.component1')
    .controller('DatepickerDemoCtrl', ['$scope', function($scope) {
        'use strict';

        $scope.today = function() {
            if ($scope.data.form.bookYear === '') {
                $scope.data.form.bookYear = new Date();
            }
        };

        $scope.data.form.bookYear = new Date().setFullYear($scope.data.form.bookYear);

        $scope.today();

        $scope.open = function() {
            $scope.status.opened = true;
        };

        $scope.setDate = function(year) {
            $scope.date = new Date(year);
            $scope.data.form.bookYear = $scope.date.getFullYear();
        };

        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1,
            minMode: 'year'
        };

        $scope.format = 'yyyy';

        $scope.status = {
            opened: false
        };
    }]);
