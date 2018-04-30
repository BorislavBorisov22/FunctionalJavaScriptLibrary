const _curry1 = require('./internal/_curry1');
const curryN = require('./curryN');

function flip(fn) {
    return curryN(fn.length, function(a, b) {
        const args = [].slice.call(arguments, 0);

        args[0] = b;
        args[1] = a;

        return fn.apply(this, args);
    });
}

module.exports = _curry1(flip);
