function fibonacci(n){
    const numbers = [1, 1];
    for(let i = 2; i <=n; i++){
        numbers.push(numbers[i - 2] + numbers[i - 1]);
    }
    return numbers[n];
}

console.log(fibonacci(4));
console.log(fibonacci(5));