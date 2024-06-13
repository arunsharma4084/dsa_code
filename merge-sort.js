function mergeSort(array){
    console.log('Function Start', array);
    if(array.length < 2){
        return array;
    }

    if(array.length === 2){
        console.log('Only two items');
        console.log(array[0] > array[1] ? [array[1], array[0]] : array);
        return array[0] > array[1] ? [array[1], array[0]] : array;
    }

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);

    console.log('After Recursive Step');
    console.log(leftArray, rightArray);

    const mergedArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;

    while(leftArrayIndex < leftSortedArray.length || rightArrayIndex < rightSortedArray.length){
        if(leftArrayIndex >= leftSortedArray.length || leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]){
            mergedArray.push(rightSortedArray[rightArrayIndex]);
            rightArrayIndex++;
        } else {
            mergedArray.push(leftSortedArray[leftArrayIndex]);
            leftArrayIndex++;
        }
    }

    console.log('After Merge');
    console.log(mergedArray);

    return mergedArray;
}

const array = [-3, 10, 1, 100, -10, 22, -6, 42, 150, 15];

console.log(mergeSort(array));