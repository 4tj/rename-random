var randomString = require('random-string');

function random(len) {
    return randomString({
        length: len,
        numeric: true,
        letters: true,
        special: false
    });
}


module.exports = random;