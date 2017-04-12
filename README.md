# shakespeare-data
A little JavaScript library you can import and use in your projects as an alternative to Lorem Ipsum style test data

[![travis build](https://img.shields.io/travis/luketn/shakespeare-data.svg?style=flat-square)](https://travis-ci.org/luketn/shakespeare-data)
[![version](https://img.shields.io/npm/v/shakespeare-data.svg?style=flat-square)](http://npm.im/shakespeare-data)

## Usage

```javascript
var shakespeare = require('shakespeare-data');
var allSonnets = shakespeare.sonnets.all();
var sonnetsContainingTruth = shakespeare.sonnets.find('truth');
```