module.exports = function sum(a,b) {
    const res = a + b
    if(Number.isNaN(res)) {
        throw new Error('The result is not a number')
    }
    return res;
}