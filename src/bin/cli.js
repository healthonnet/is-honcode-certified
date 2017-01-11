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

var argv = yargs.argv;

var hon = require('../lib/index.js');

hon.isHONcodeCertified(argv.url).then(function(isCertified) {
  if (isCertified) {
    console.log('\n🦄   It\'s safe\n');
  } else {
    console.log('\n👻   Be careful\n');
  }
});
