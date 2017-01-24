#!/usr/bin/env node

'use strict';

var yargs = require('yargs')
  .usage('Usage: $0 <url> [-?, --help]')
  .options({
    url: {
      alias: 'u',
      describe: 'url to check',
      demand: true,
    },
  })
  .demandOption('url')
  .help('?')
  .alias('?', 'help');

var argv  = yargs.argv;
var hon   = require('../lib/index.js');
var utils = require('honcode-certification-utils');

var certifiedUrl = function(isCertified) {
  if (isCertified) {
    console.log('\n🦄   It\'s safe\n');
  } else {
    console.log('\n👻   Be careful\n');
  }
};

if (typeof argv.url !== 'string') {
  console.log(argv.url + ' is not a valid url');
  process.exit(1);
}

if (utils.isValidUrl(argv.url)) {
  hon.isHONcodeCertified(argv.url).then(certifiedUrl);
} else {
  console.log(argv.url + ' is not a valid url');
}
