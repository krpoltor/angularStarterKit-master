/*eslint-disable*/
'use strict';

var config = {

  url: 'http://localhost:9000/#/component-1/dialog-a'

};

function DialogA_PO(){

}


DialogA_PO.prototype.getHomePage = function() {
  browser.get(config.url);

};

module.exports = DialogA_PO;
