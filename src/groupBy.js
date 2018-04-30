const _curry2 = require('./internal/_curry2');

function groupBy(groupFn, list) {
    const length = list.length;
    let index = 0;

    const groups = {};
    while (index < length) {
        const element = list[index];
        const groupName = groupFn(element);

        groups[groupName] = groups[groupName] 
        ? groups[groupName].concat(element)
        : [element];

        index++;
    }

    return groups;
}

module.exports = _curry2(groupBy);
