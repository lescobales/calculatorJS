module.exports = function substract(a,b) {
    const res = a - b
    if(Number.isNaN(res)) {
        throw new Error('The result is not a number')
    }
    return res;
    }