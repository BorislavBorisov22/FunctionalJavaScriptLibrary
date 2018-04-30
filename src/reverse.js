const _curry1 = require('./internal/_curry1');
const _isArray = require('./internal/_isArray');

function reverse(iterable) {
    return _isArray(iterable) ?
        iterable.slice().reverse() :
        iterable
            .split('')
            .reverse()
            .join('');
}

module.exports = _curry1(reverse);
