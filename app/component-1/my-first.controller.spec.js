describe('MyFirstCntrl tests', function() {
    'use strict';

    var $scope;

    beforeEach(module('app.component1'));

    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('MyFirstController', {
            $scope: $scope
        });
    }));

    describe('some suite', function() {
        it('some spec', function() {
            // given
            // when
            $scope.add();
            // then
        });
    });
});