const _curry2 = require('./internal/_curry2');

function sortBy(fn, list) {
    return Array.prototype.slice(list)
        .sort((a, b) => {
            const aa = fn(a);
            const bb = fn(b);

            return aa > bb ? 1 : aa < bb ? -1 : 0;
        });
}

module.exports = _curry2(sortBy);
