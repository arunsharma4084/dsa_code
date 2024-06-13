function getMinOfArray(numbers){
    if(numbers.length === 0) return null;

    let currentMinimum = numbers[0];
    for(const number of numbers){
        if(number < currentMinimum){
            currentMinimum = number;
        }
    }
    return currentMinimum;
}

console.log(getMinOfArray([1, 2, 3]));
console.log(getMinOfArray([6, 2, 36, 65, 5]));
console.log(getMinOfArray([16, 27, 37, 10]));

