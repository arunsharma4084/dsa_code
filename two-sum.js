function twoSum(array, target){
    const complementTable = new Map();

    for(let i = 0; i < array.length; i++){
        const difference = target - array[i];

        if(complementTable.has(difference)){
            return [i, complementTable.get(difference)];
        } else {
            complementTable.set(array[i], i);
        }
    }
}

const result = twoSum([2, 7, 11, 15, 10], 12);

console.log(result);