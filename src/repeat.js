const _curry2 = require('./internal/_curry2');
const _always = require('./always');
const times = require('./times');

function repeat(value, repeatCount) {
    return times(_always(value), repeatCount);
}

module.exports = _curry2(repeat);
