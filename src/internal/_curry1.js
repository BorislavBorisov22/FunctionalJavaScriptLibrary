const _isPlaceholder = require('./_isPlaceholder');

function _curry1(fn) {
    return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
            return f1;
        } else {
            return fn(a);
        }
    }
}

module.exports = _curry1;
