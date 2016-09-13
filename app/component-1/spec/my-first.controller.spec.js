describe('MyFirstController tests', function() {
    'use strict';

    var $scope, controller, modal,
        addBookModalConfig = {
            templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'AddModalController',
            size: 'lg'
        };

    beforeEach(module('app.component1'));

    beforeEach(
        inject(
            function($controller, $rootScope) {
                $scope = $rootScope.$new();
                // Create a mock object using spies
                modal = {
                    open: jasmine.createSpy('modalInstance.open')
                };
                controller = $controller('MyFirstController', {
                    $scope: $scope,
                    $modal: modal
                });
            }));

    describe('Dialog A', function() {
        it('should initialise controller', function() {
            // given
            // when
            // then
            expect(controller).not.toBeUndefined();
        });

        it('should open modal when Add button clicked', function() {
            // given
            // when
            $scope.add();
            // then
            expect(modal.open).toHaveBeenCalledWith(addBookModalConfig);

          });
    });
});
