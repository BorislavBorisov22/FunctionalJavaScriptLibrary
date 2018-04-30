function _isPlaceholder(a) {
    return a != null && typeof a === 'object' && a['@@functional/placeholder'];
}

module.exports = _isPlaceholder;
