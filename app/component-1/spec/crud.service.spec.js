describe('CrudService tests', function() {
    'use strict';

    var CrudService, $httpBackend, book = {};

    beforeEach(module('app'));
    beforeEach(inject(function(_CrudService_, _$httpBackend_) {
        CrudService = _CrudService_;
        $httpBackend = _$httpBackend_;
    }));

    it('should post data', function() {
        // given
        $httpBackend.whenPOST('/books').respond(true);
        // when
        CrudService.post(book);
        $httpBackend.flush();
        // then
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should put data', function() {
        // given
        $httpBackend.whenPUT('/books').respond(true);
        // when
        CrudService.put(book);
        $httpBackend.flush();
        // then
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});