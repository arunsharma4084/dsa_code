function linearSearch(arr, element, comparatorFn){
    let index = 0;

    for(const item of arr){
        if(typeof element === 'object' && element !== null & comparatorFn(element, item)){
            return index;
        }
        if(item === element){
            return index;
        }
        index++;
    }
    return -1;
}

const array = [34, 48, 17, 68, 25, 76, 15, 29, 38];

console.log(linearSearch(array, 15));
console.log(linearSearch(array, 48));

// const person = {name: "arun", age: 31};
const objects = [
    {name: "arun", age: 31},
    {name: "monika", age: 32},
    {name: "govind", age: 34},
    {name: "ramesh", age: 37},
    {name: "vishnu", age: 38}
];

console.log(linearSearch(objects, {name: "arun", age: 31}, function(el, it) {
    return el.name === it.name && el.age === it.age
}));
