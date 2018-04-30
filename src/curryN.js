const _curry1 = require('./internal/_curry1');
const _curry2 = require('./internal/_curry2');
const _curryN = require('./internal/_curryN');
const _arity = require('./internal/_arity');

function curryN(length, fn) {
    if (length === 1) {
        return _curry1(fn);
    }

    return _arity(length, _curryN(length, [], fn));
}

module.exports = _curry2(curryN);
