Is HONcode Certified
====================

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![NPM version][npm-image]][npm-url]

Is HONcode Certified NPM module

Install
-------

```bash
$ npm install -g is-honcode-certified
```

Command Line
------------

```bash
$ is-honcode-certified --help

Usage: is-honcode-certified <url> [-?, --help]

Options:
  --url, -u   url to check   [required]
  -?, --help  Show help      [boolean]
```

Usage
-----

```js
var hon = require('is-honcode-certified');

hon.isHONcodeCertified('https://www.hon.ch/').then(function(isCertified) {
  if (isCertified) {
    console.log('\n🦄   It\'s safe\n');
  } else {
    console.log('\n👻   Be careful\n');
  }
});
```

API
---

### .isHONcodeCertified(url)

Type: `function`

Return a Promise with true if the website is certified.


See Also
--------

 * [HONcode Certification List](https://github.com/healthonnet/honcode-certification-list)
 * [HONcode Certification Utils](https://github.com/healthonnet/honcode-certification-utils)

Contributing to Is HONcode Certified
------------------------------------

Contributions are always welcome, no matter how large or small.

See [Contributing](CONTRIBUTING.md).

Developer
---------

  * William BELLE

License
-------

Apache License 2.0

[npm-image]: https://img.shields.io/npm/v/is-honcode-certified.svg
[npm-url]: https://www.npmjs.com/package/is-honcode-certified
[travis-image]: https://travis-ci.org/healthonnet/is-honcode-certified.svg?branch=master
[travis-url]: https://travis-ci.org/healthonnet/is-honcode-certified
[coverage-image]: https://coveralls.io/repos/github/healthonnet/is-honcode-certified/badge.svg
[coverage-url]: https://coveralls.io/github/healthonnet/is-honcode-certified
