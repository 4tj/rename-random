#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var random = require('../lib/random');

var fileName = process.argv.slice(2)[0];
var filePath = path.join(process.cwd(), fileName);

var outputName = random(16) + path.extname(fileName);

fs.rename(filePath, path.join(path.dirname(filePath), outputName), function (err) {
    if (err) {
        throw err;
    }
    console.log('Renamed ' + fileName + ' to ' + outputName);
});