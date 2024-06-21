function twoSum(array, target){
    const complementTable = {};

    for(let i = 0; i < array.length; i++){
        if(complementTable[array[i]] !== undefined){
            return [i, complementTable[array[i]]];
        } else {
            const difference = target - array[i];
            complementTable[difference] = i;
        }
    }
}

const result = twoSum([2, 7, 11, 15, 10], 12);

console.log(result);