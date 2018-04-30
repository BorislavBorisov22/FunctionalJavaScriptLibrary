const filter = require('./filter');
const _complement = require('./internal/_complement');
const _curry2 = require('./internal/_curry2');

function reject(predicate, filterable) {
    return filter(_complement(predicate), filterable);
}

module.exports = _curry2(reject);
