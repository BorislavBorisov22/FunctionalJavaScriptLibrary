const _isArray = require('./_isArray');

function _checkForMetod(methodName, fn) {
    return function() {
        const len = arguments.length;
        if (len === 0) {
            return fn();
        }

        const obj = arguments[len - 1];
        return ((_isArray(obj) || typeof obj[methodName] !== 'function') ?
        fn.apply(this, arguments) :
        obj[methodName].apply(obj, Array.prototype.slice.call(arguments, 0, len - 1)));
    }
}

module.exports = _checkForMetod;
