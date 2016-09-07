angular.module('app.component1').factory('BooksFactory', function($http) {
  'use strict';

  var books = {};

 books.getBooks = function() {
        return $http.get('/component-1/books.json');
 };

return books;

}).controller('MyFirstController', function($scope, $http, $modal, BooksFactory) {
    'use strict';

    $scope.data = {
      books: []
    };

    $scope.data.books = BooksFactory.getBooks();

    BooksFactory.getBooks().success(function(response){
      $scope.data.books = response;
    });

    //
    // angular.copy(books.data, $scope.data.books);

    $scope.add = function() {
        $modal.open({
            templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'AddModalController',
            size: 'lg'
        });
    };

    //FIXME: datepicker

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

}).controller('AddModalController', function($scope, $modalInstance, $http) {
    'use strict';

    var book = {
        title: '',
        author: '',
        genre: '',
        year: ''
    };

    $scope.data = {
        form: []
    };

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
                method: 'POST',
                url: '/books',
                data: book
            }).then(function successCallback(response) {alert('SUCCEED');}, function errorCallback(response) {alert('FAILED');});
        }};

    $scope.exit = function() {
        $modalInstance.close();
    };

}).controller('EditModalController', function($scope, $modalInstance, $http, selectedBook) {
    'use strict';

    var book = {
        title: '',
        author: '',
        genre: '',
        year: ''
    };

    $scope.data = {
        form: [],
        selectedBook: {}
    };

    angular.copy(selectedBook, $scope.data.selectedBook);

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
          }).then(function successCallback(response) {alert('SUCCEED');}, function errorCallback(response) {alert('FAILED');});
      }};

    $scope.exit = function() {
        $modalInstance.close();
    };

}).controller('DatepickerDemoCtrl', function($scope) {
    'use strict';

    $scope.today = function() {
        $scope.dt = new Date();
    };

    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.open = function($event) {
        $scope.status.opened = true;
    };

    $scope.setDate = function(year) {
        $scope.dt = new Date(year);
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1,
        minMode: 'year'
    };

    $scope.formats = ['yyyy'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };
});
