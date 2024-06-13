// function factorial(number){
//     let result = 1;
//     for(let i = 2; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }


// Using Recursion
function factorial(number){
    if(number === 1){
        return 1;
    }
    return number * factorial(number - 1);
}


console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(10));