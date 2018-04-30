const _curry2 = require('./internal/_curry2');

function and(a, b) {
    return a && b;
}

module.exports = _curry2(and);
