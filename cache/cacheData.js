function cacheFunction(fn) {
    const cache = new Map();
    return function(n) {
        if(cache.has(n)) {
            console.log('Value from cache:');
            return cache.get(n);
        }
        const val = fn(n);
        cache.set(n, val);
        console.log('Value calculated:');
        return val;
    };
}

function factorial(n) {
    let result = 1;
    while(n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

const cachedFactorial = cacheFunction(factorial);

console.log(cachedFactorial(5)); // calculated
console.log(cachedFactorial(4)); // calculated
console.log(cachedFactorial(5)); // cached
