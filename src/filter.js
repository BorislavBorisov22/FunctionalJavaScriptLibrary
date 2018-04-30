const _reduce = require('./internal/_reduce');
const _curry2 = require('./internal/_curry2');
const _isObject = require('./internal/_isObject');
const _filter = require('./internal/_filter');

function filter(predicate, filterable) {
    return (_isObject(filterable) ? 
        _reduce((acc, key) => {
            if (predicate(filterable[key])) {
                acc[key] = filterable[key];
            }

            return acc;

        }, {}, Object.keys(filterable)) :
         _filter(predicate, filterable)
    );
};

module.exports = _curry2(filter);

