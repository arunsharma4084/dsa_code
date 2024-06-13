function selectionSort(array){
    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let last = i - 1;

        while(last >= 0 && key < array[last]){
            array[last + 1] = array[last];
            last = last - 1;
        }
        array[last + 1] = key;
    }
    return array;
}

const array = [-3, 10, 1, 100, -10, 22, -6, 42, 150, 15];
const array2 = [5, 4, 3, 2, 1];

console.log(selectionSort(array));
console.log(selectionSort(array2));