const _curryN = require('./internal/_curryN');
const _reduce = require('./internal/_reduce');
const _has = require('./internal/_has');

function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce((acc, current) => {
        const key = keyFn(current);
        acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, current);
        return acc;
    }, {}, list);
}

module.exports = _curryN(4, [], reduceBy);
