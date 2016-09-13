describe('BookFactory tests', function() {
    'use strict';

    var BooksFactory;

    beforeEach(module('app.component1'));

    beforeEach(inject(function(_BooksFactory_) {
        BooksFactory = _BooksFactory_;
    }));

    it('should post data', function() {
        // given
        var response = {};
        // when
        response = BooksFactory.getBooks();
        // then
        expect(response).not.toBeUndefined();
    });
});
