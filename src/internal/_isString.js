const _curry1 = require('./_curry1');

function _isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
}

module.exports = _curry1(_isString);
