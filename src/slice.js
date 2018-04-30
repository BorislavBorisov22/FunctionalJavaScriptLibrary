const _curry3 = require('./internal/_curry3');
const _checkForMethod = require('./internal/_checkForMethod');

const slice = _checkForMethod('slice', function slice(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
});

module.exports = _curry3(slice);
