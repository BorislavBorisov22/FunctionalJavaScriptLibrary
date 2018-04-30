const _reduce = require('./internal/_reduce');

function compose() {
    const funcs = Array.prototype.slice.call(arguments).reverse();
    return function(...args) {
       const accumulator = funcs[0](...args);
       return _reduce((acc, currentFn) => {
           return currentFn(acc);
       }, accumulator, funcs.slice(1));
    };
};

module.exports = compose;
