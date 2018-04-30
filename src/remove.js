const _curry3 = require('./internal/_curry3');

function remove(startIndex, count, list) {
    const result = [].slice.call(list, 0);
    result.splice(startIndex, count);
    return result;
}

module.exports = _curry3(remove);
