const _curry3 = require('./_curry3');

function _reduce(fn, initialValue, list) {
    let index = 0;
    const length = list.length;

    let value = initialValue;
    while (index < length) {
        value = fn(value, list[index]);
        index++;
    }

    return value;
}

module.exports = _curry3(_reduce);
