const _curry2 = require('./_curry2');

function _filter(predicate, list) {
    let index = 0;
    const { length } = list;

    const res = [];
    while (index < length) {
        if (predicate(list[index])) {
            res.push(list[index]);
        }

        index++;
    }

    return res;
}

module.exports = _curry2(_filter);
