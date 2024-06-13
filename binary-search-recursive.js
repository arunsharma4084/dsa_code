function binarySearch(sortedArray, element, offset, comparatorFn){
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    const middleIndex = Math.floor((endIndex - startIndex) / 2);
    
    if(endIndex < startIndex){
        return -1;
    }

    if(typeof element === 'object' && element !== null && comparatorFn(element, sortedArray[middleIndex])){
        return offset + middleIndex;
    }

    if(element === sortedArray[middleIndex]){
        return offset + middleIndex;
    }

    if(element < sortedArray[middleIndex]){
        endIndex = middleIndex - 1;
    } else {
        startIndex = middleIndex + 1;
        offset = offset + middleIndex + 1;
    }
    return binarySearch(sortedArray.slice(startIndex, endIndex + 1), element, offset, comparatorFn); 
}

const array = [1, 5, 9, 13, 99, 100, 124, 130, 140, 150, 160, 170, 180];

console.log(binarySearch(array, 134, 0));
console.log(binarySearch(array, 180, 0));

const objects = [
    {name: "arun", age: 31},
    {name: "monika", age: 32},
    {name: "govind", age: 34},
    {name: "ramesh", age: 37},
    {name: "vishnu", age: 38}
];

console.log(binarySearch(objects, {name: "ramesh", age: 37}, 0, function(el, it) {
    return el.name === it.name && el.age === it.age
}));

// function binarySearch(sortedArray, element, comparatorFn){
//     let startIndex = 0;
//     let endIndex = sortedArray.length - 1;

//     result = binarySearchHelper(startIndex, endIndex, sortedArray, element, comparatorFn);
//     return result;
// }

// function binarySearchHelper(startIndex, endIndex, sortedArray, element, comparatorFn){
//     if(endIndex < startIndex){
//         return -1;
//     }

//     const middleIndex = Math.floor((endIndex + startIndex) / 2);
    
//     if(typeof element === 'object' && element !== null && comparatorFn(element, sortedArray[middleIndex])){
//         return middleIndex;
//     }

//     if(element === sortedArray[middleIndex]){
//         return middleIndex;
//     }

//     if(element < sortedArray[middleIndex]){
//         endIndex = middleIndex - 1;
//     } else {
//         startIndex = middleIndex + 1;
//     }
//     return binarySearchHelper(startIndex, endIndex, sortedArray, element, comparatorFn); 
// }

// const array = [2, 4, 5, 7, 8, 9, 15, 20, 25, 30, 32, 35];

// console.log(binarySearch(array, 32));
// console.log(binarySearch(array, 355));

// const objects = [
//     {name: "arun", age: 31},
//     {name: "monika", age: 32},
//     {name: "govind", age: 34},
//     {name: "ramesh", age: 37},
//     {name: "vishnu", age: 38}
// ];

// console.log(binarySearch(objects, {name: "ramesh", age: 37}, function(el, it) {
//     return el.name === it.name && el.age === it.age
// }));