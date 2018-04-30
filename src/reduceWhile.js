const curryN = require('./curryN');

function reduceWhile(predicate, valueFn, accumulator, list) {
    const length = list.length;
    let index = 0;

    let acc = accumulator;
    while (index < length) {
        if (!predicate(acc, list[index])) {
            return acc;
        }

        acc = valueFn(acc, list[index]);
        index++;
    }

    return acc;
}

module.exports = curryN(4, reduceWhile);
