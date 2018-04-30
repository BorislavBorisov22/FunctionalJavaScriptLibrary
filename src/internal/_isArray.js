module.exports = Array.isArray || function _isArray(value) {
    return (value !== null && value.length >= 0 && Object.prototype.toString.call(value) === '[Object Array]');
};
