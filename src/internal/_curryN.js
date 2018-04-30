const _isPlaceholder = require('./_isPlaceholder');
const _curry1 = require('./_curry1');
const _arity = require('./_arity');
const __ = require('../__');

function _curryN(length, received, fn) {
    return function() {
        const combined = [];
        let combinedIndex = 0;
        let argsIndex = 0;
        let left = length;

        while (combinedIndex < received.length || argsIndex < arguments.length) {
            let result;
            if (combinedIndex < received.length && (!_isPlaceholder(received[combinedIndex]) || argsIndex>= arguments.length)){
                result = received[combinedIndex];
            } else {
                result = arguments[argsIndex];
                argsIndex++;
            }

            combined[combinedIndex] = result;

            if (!_isPlaceholder(result) && combinedIndex < length) {
                left--;
            }

            combinedIndex++;
        }

        return left <= 0 ? 
        fn.apply(this, combined) 
        : _arity(left, _curryN(length, combined, fn));
    };
}

module.exports = _curryN;
