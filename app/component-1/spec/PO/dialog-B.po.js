/*eslint-disable*/
'use strict';

var config = {

  url: 'http://localhost:9000/#/component-2/dialog-b'

};

function DialogB_PO(){

}


DialogB_PO.prototype.getHomePage = function() {
  browser.get(config.url);

};

module.exports = DialogB_PO;
