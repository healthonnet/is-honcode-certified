'use strict';

var HONcodeCertificationList = require('honcode-certification-list');
var HONcodeUtils = require('honcode-certification-utils');

exports.isHONcodeCertified = function(url) {

  // Get HONcode list
  return HONcodeCertificationList.getHONcodeCertificationList().then(
    function(hash) {
      // Prepare url
      url = HONcodeUtils.addTrailingSlash(url);
      url = HONcodeUtils.formatUrl(url);
      var listUrls = HONcodeUtils.buildUrlToCheck(url);

      return HONcodeCertificationList.isInList(hash, listUrls);
    }).catch(function(reason) {
      console.log(reason);
    }
  );
};
