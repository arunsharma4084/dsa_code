function quickSort(array){
    // const copiedArray = [...array];

    // if(copiedArray.length <= 1) return copiedArray;

    // const smallerElementsArray = [];
    // const biggerElementsArray = [];
    // const pivotElement = copiedArray.shift();
    // const equalElementsArray = [pivotElement];

    // while(copiedArray.length){
    //     const currentElement = copiedArray.shift();
    //     if(currentElement < pivotElement){
    //         smallerElementsArray.push(currentElement);
    //     } else if(currentElement > pivotElement){
    //         biggerElementsArray.push(currentElement);
    //     } else {
    //         equalElementsArray.push(currentElement);
    //     }
    // }

    // const smallerElementsSortedArray = quickSort(smallerElementsArray);
    // const biggerElementsSortedArray = quickSort(biggerElementsArray);

    // return smallerElementsSortedArray.concat(equalElementsArray, biggerElementsSortedArray);

    quickSortHelper(array, 0, array.length - 1);
    return array;
}

function quickSortHelper(array, start, end){
    if(start >= end){
        return
    }

    let pivot = start;
    let left = start + 1;
    let right = end;

    while(right >= left){
        if(array[left] > array[pivot] && array[right] < array[pivot]){
            [array[left], array[right]] = [array[right], array[left]];
        } 
        if(array[left] <= array[pivot]) left += 1;
        if(array[right] >= array[pivot]) right -= 1
    }
    [array[pivot], array[right]] = [array[right], array[pivot]];

    quickSortHelper(array, start, right - 1);
    quickSortHelper(array, right + 1, end);
}

const array = [-3, 10, 1, 100, -10, 22, -6, 42, 150, 15];

console.log(quickSort(array));