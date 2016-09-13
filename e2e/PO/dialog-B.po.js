/*eslint-disable*/
'use strict';

var config = {

  url: 'http://localhost:9000/#/component-2/dialog-b',

  sampleITBookTitle: 'Code Complete',
  sampleITBookAuthor: 'Steve McConnell',
  sampleITBookGenre: 'it',
  sampleITBookYear: '1999',

  sampleCrimeBookTitle: 'Crime crime',
  sampleCrimeBookAuthor: 'Crime 42 crime never changes.',
  sampleCrimeBookGenre: 'crime',
  sampleCrimeBookYear: '2081',

  sampleTestBookTitle: 'Lorem ipsum',
  sampleTestBookAuthor: 'Erich ipsum, Ralph Lorem',
  sampleTestBookGenre: 'test',
  sampleTestBookYear: '2001',

  sampleBorkBookTitle: 'Bork bork - bork!',
  sampleBorkBookAuthor: 'Bork Pork, Borke D. Gork.',
  sampleBorkBookGenre: 'bork',
  sampleBorkBookYear: '2081',

  sampleFooBookTitle: 'Foo',
  sampleFooBookAuthor: 'Foo F. Foo.',
  sampleFooBookGenre: 'foo',
  sampleFooBookYear: '1970'
};

function DialogB_PO(){

}


DialogB_PO.prototype.getHomePage = function() {
  browser.get(config.url);

};

module.exports = DialogB_PO;
