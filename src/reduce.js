const _curry3 = require('./internal/_curry3');
const _reduce = require('./internal/_reduce');

function reduce(fn, initialValue, list) {
    return _reduce(fn, initialValue, list);
}

module.exports = _curry3(reduce);
