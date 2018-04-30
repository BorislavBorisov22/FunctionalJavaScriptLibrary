const _curry1 = require('./internal/_curry1');

function always(value) {
    return function() {
        return value;
    };
}

module.exports = _curry1(always);
