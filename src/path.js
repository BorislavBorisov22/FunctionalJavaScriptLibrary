const _curry2 = require('./internal/_curry2');

function path(paths, obj) {
    let index = 0;

    let value = obj;
    while (index < path.length) {
        if (value === null || value === undefined) {
            return;
        }

        value = value[paths[index]];
        index++;
    }

    return value;
}

module.exports = _curry2(path);
