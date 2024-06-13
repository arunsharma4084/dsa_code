function binarySearch(sortedArray, element, comparatorFn){
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while(startIndex <= endIndex){     
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if(typeof element === 'object' && element !== null && comparatorFn(element, sortedArray[middleIndex])){
            return middleIndex;
        }

        if(element === sortedArray[middleIndex]){
            return middleIndex;
        }

        if(element < sortedArray[middleIndex]){
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }
    return -1;    
}

const array = [1, 5, 9, 13, 99, 100];

console.log(binarySearch(array, 99));
console.log(binarySearch(array, 5));

const objects = [
    {name: "arun", age: 31},
    {name: "monika", age: 32},
    {name: "govind", age: 34},
    {name: "ramesh", age: 37},
    {name: "vishnu", age: 38}
];

console.log(binarySearch(objects, {name: "ramesh", age: 37}, function(el, it) {
    return el.name === it.name && el.age === it.age
}));