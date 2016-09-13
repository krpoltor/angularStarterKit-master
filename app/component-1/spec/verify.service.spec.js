describe('VerifyService test', function() {
    'use strict';

    var VerifyService;

    beforeEach(module('app.component1'));
    beforeEach(inject(function(_VerifyService_) {
        VerifyService = _VerifyService_;
    }));

    it('should check if one of the input is undefined', function() {
        // given
        var result;
        // when
        result = VerifyService.isUndefined(undefined, 'test', 'test');
        // then
        expect(result).toBe(true);
    });

    it('should check if one of the input is empty', function() {
        // given
        var result;
        // when
        result = VerifyService.isEmpty('test', '', 'test');
        // then
        expect(result).toBe(true);
    });

    it('should check if input is valid', function() {
        // given
        var result;
        // when
        result = VerifyService.verify('test', 'test', 'test');
        // then
        expect(result).toBe(true);
    });
});