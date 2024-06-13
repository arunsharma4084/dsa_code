function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]];
    }
    return array;
}

const array = [-3, 10, 1, 100, -10, 22, -6, 42, 150, 15];

console.log(selectionSort(array));