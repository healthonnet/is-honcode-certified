'use strict';

require('chai').should();
var isHONcodeCertified = require('../src/lib/index.js');

describe('is HONcode Certified', function() {
  this.timeout(15000);

  it('should return true for webmd.com/', function(done) {
    isHONcodeCertified.isHONcodeCertified('http://www.webmd.com/').then(
      function(isCertified) {
        isCertified.should.equal(true);
        done();
      }
    );
  });

  it('should return true for webmd.com', function(done) {
    isHONcodeCertified.isHONcodeCertified('http://www.webmd.com').then(
      function(isCertified) {
        isCertified.should.equal(true);
        done();
      }
    );
  });

  it('should return false for playboy.com', function(done) {
    isHONcodeCertified.isHONcodeCertified('http://www.playboy.com/').then(
      function(isCertified) {
        isCertified.should.equal(false);
        done();
      }
    );
  });

});
