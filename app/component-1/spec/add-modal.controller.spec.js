describe('AddModalController tests', function() {
    'use strict';

    var $scope, controller, modalInstance;

    beforeEach(module('app.component1'));

    beforeEach(
        inject(
            function($controller, $rootScope) {
                $scope = $rootScope.$new();
                // Create a mock object using spies
                modalInstance = {
                    open: jasmine.createSpy('modalInstance.open')
                };
                controller = $controller('AddModalController', {
                    $scope: $scope,
                    $modalInstance: modalInstance
                });
            }));

    describe('Modal Add', function() {
        it('should initialise controller', function() {
            // given
            // when
            // then
            expect(controller).not.toBeUndefined();
        });

        it('should initialise modal with empty fields', function() {
            // given
            // when
            // then
            expect($scope.data.form).toEqual([]);
        });

    });
});
