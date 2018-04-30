const _curry2 = require('./internal/_curry2');

function all(fn, list) {
    for (let i = 0; i < list.length; i++) {
        if (!fn(list[i])) {
            return false;
        }
    }

    return true;
}

module.exports = _curry2(all);
