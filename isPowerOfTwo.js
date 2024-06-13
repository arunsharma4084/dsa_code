// function isPowerOfTwo(number){
//     if(number < 1) return false;

//     let dividedNumber = number;
//     while(dividedNumber !== 1){
//         if(dividedNumber % 2 !== 0){
//             return false;
//         }
//         dividedNumber = dividedNumber / 2;
//     }
//     return true;
// }

function isPowerOfTwo(number){
    if(number < 1) return false;

    return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(578));
console.log(isPowerOfTwo(256));
console.log(isPowerOfTwo(1125899906842624));