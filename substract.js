module.exports = function substract(a,b) {
    if(a < b){
    throw new Error('Negative value not allowed');
    }
    return a - b;
    }