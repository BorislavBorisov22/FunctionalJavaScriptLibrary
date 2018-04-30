const path = require('./path');
const _curry2 = require('./internal/_curry2');

function prop(p, obj) {
    return path([p], obj);
}

module.exports = _curry2(prop);
