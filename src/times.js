const _curry2 = require('./internal/_curry2');

function times(fn, n) {
    const len = Number(n);
    let index = 0;

    if (len < 0 || isNaN(len)) {
        throw new RangeError('n must be a non-negative integer');
    }

    const list = new Array(len);
    while (index < list.length) {
        list[index] = fn(index);
        index++;
    }

    return list;
}

module.exports = _curry2(times);
