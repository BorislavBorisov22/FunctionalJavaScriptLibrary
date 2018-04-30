const _curry1 = require('./internal/_curry1');
const _isString = require('./internal/_isString');

function toUpper(str) {
    if (!_isString(str)) {
        throw new TypeError('Passed parameter must be of type string!');
    }

    return str.toUpperCase();
}

module.exports = _curry1(toUpper);
