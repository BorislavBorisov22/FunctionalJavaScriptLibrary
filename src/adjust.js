const _concat = require('./internal/_concat');
const _curry3 = require('./internal/_curry3');

function adjust(fn, index, list) {
    if (index >= list.length || index < -list.length) {
        return list;
    }

    const start = index < 0 ? list.length : 0;
    const _index = start + index;

    const newList = _concat(list);
    newList[_index] = fn(newList[_index]);
    return newList; 
}

module.exports = _curry3(adjust);
