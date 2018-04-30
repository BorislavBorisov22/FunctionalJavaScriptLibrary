const _curry2 = require('./internal/_curry2');

function subtract(a, b) {
    return Number(a) - Number(b);
}

module.exports = _curry2(subtract);
