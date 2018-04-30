const _curry2 = require('./internal/_curry2');

function forEach(fn, list) {
    for (let i = 0; i < list.length; i++) {
        fn(list[i]);
    }

    return list;
}

module.exports = _curry2(forEach);
