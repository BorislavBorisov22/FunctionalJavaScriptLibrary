const _curry2 = require('./internal/_curry2');

function anyPass(predicates, obj) {
    let index = 0;
    while (index < predicates.length) {
        if (predicates[index](obj)) {
            return true;
        }

        ++index;
    }

    return false;
}

module.exports = _curry2(anyPass);
