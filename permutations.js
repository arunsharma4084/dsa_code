// // Without Repititions

// function getPermutations(options){
//     const permutations = [];

//     console.log('Function Start');
//     console.log(options);

//     if(options.length === 1){
//         console.log("Return Condition reached");
//         return [options];
//     }

//     const partialPermutations = getPermutations(options.slice(1));

//     console.log("After Recursion");
//     console.log(partialPermutations);

//     const firstOption = options[0];
//     console.log('First Option', firstOption);

//     for(let i = 0; i < partialPermutations.length; i++){
//         const partialPermutation = partialPermutations[i];
//         console.log('Outer Loop');
//         console.log(partialPermutation);

//         for(let j = 0; j <= partialPermutations.length; j++){
//             const permutationInFront = partialPermutation.slice(0, j);
//             const permutationAfter = partialPermutation.slice(j);

//             console.log(permutationInFront, permutationAfter);
//             permutations.push(permutationInFront.concat([firstOption], permutationAfter));
//         }
//     }
//     return permutations;
// }

// const todoListItems = ['Walk the dog', 'clean the toilet', 'buy groceries', 'order food'];

// console.log(getPermutations(todoListItems));

// With Repititions

function getPermutations(options, length){
    const permutations = [];

    console.log('Function Start');
    console.log(options, length);

    if(length === 1){
        console.log("Return Condition reached");
        return options.map(option => [option]);
    }

    const partialPermutations = getPermutations(options, length - 1);

    console.log("After Recursion");
    console.log(partialPermutations);

    for(const option of options){
        for(const existingPermutation of partialPermutations){
            permutations.push([option].concat(existingPermutation));
        }
    }
    return permutations;
}

const digits = [1, 2, 3];
const resultLength = 3;

console.log(getPermutations(digits, resultLength));
