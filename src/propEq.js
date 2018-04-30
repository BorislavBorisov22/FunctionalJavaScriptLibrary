const _curry3 = require('./internal/_curry3');

function propEq(name, value, object) {
    return object[name] === value;
}

module.exports = _curry3(propEq);
