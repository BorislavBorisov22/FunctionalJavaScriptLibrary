const _curry3 = require('./internal/_curry3');

function scan(reduceFn, accumulator, list) {
    let index = 0;
    const len = list.length;
    const results = [accumulator];

    let acc = accumulator;
    while (index < len) {
        acc = reduceFn(acc, list[index]);
        index++;
        results[index] = acc;
    }

    return results;
}

module.exports = _curry3(scan);
