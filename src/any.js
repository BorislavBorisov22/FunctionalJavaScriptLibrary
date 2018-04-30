const _curry2 = require('./internal/_curry2');

function any(fn, list) {
    let index = 0;
    while (index < list.length) {
        if (fn(list[index++])) {
            return true;
        }
    }

    return false;
}

module.exports = _curry2(any);
