
const _curry2 = require('./_curry2');

function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];

    let index = 0;
    let len1 = set1.length;
    let len2 = set2.length;

    const concatenatedArr = [];
    while (index < len1) {
        concatenatedArr.push(set1[index++]);
    }

    index = 0;
    while (index < len2) {
        concatenatedArr.push(set2[index++]);
    }

    return concatenatedArr;
}

module.exports = _curry2(_concat);
