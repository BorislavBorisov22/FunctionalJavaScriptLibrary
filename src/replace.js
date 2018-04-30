const _curry3 = require('./internal/_curry3');

function replace(match, replaceValue, text) {
    return text.replace(match, replaceValue);
}

module.exports = _curry3(replace);
