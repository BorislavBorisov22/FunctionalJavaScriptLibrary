
function reduceRight(fn, accumulator, list) {
    let index = list.length - 1;
    let acc = accumulator;
    while (index >= 0) {
        acc = fn(list[index], acc);
        index--;
    }

    return acc;
}

module.exports = reduceRight;
