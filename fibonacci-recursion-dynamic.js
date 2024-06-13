let counter = 0;

function fibonacci(n, memo){
    counter ++;
    let result;

    if(memo[n]) return memo[n];

    if(n === 0 || n === 1){
        result = 1;
    } else {
        result = fibonacci(n-2, memo) + fibonacci(n-1, memo)
    }

    memo[n] = result;    
    return result;
}

fibonacci(4, {});
console.log(counter);
counter = 0;

fibonacci(5, {});
console.log(counter);
counter = 0;

fibonacci(20, {});
console.log(counter);
counter = 0;

fibonacci(50, {});
console.log(counter);
counter = 0;
