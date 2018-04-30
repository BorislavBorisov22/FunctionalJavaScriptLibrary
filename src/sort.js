const _curry2 = require('./internal/_curry2');

function sort(comparator, list) {
    return Array.prototype.slice.call(list).sort(comparator);
}

module.exports = _curry2(sort);
