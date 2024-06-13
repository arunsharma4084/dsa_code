function bubbleSort(array){
    const resultArray = [...array];

    // for(let outer = 0; outer < resultArray.length; outer++){
    //     let outerEl = resultArray[outer];
    //     for(let inner = outer + 1; inner < resultArray.length; inner++){
    //         let innerEl = resultArray[inner];
    //         if(outerEl < innerEl){
    //             resultArray[outer] = innerEl;
    //             resultArray[inner] = outerEl;

    //             outerEl = resultArray[outer];
    //             innerEl = resultArray[inner];
    //         }
    //     }
    //     console.log(resultArray);
    // }

    for(let outer = 0; outer < resultArray.length; outer++){
        // let outerEl = resultArray[outer];
        for(let inner = 0; inner < resultArray.length - 1 - outer; inner++){
            // let innerEl = resultArray[inner];
            if(resultArray[inner] < resultArray[inner + 1]){
                let innerEl = resultArray[inner];
                resultArray[inner] = resultArray[inner + 1];
                resultArray[inner + 1] = innerEl;
            }
        }
        console.log(resultArray);        
    }

    return resultArray;
}

const array = [5, 10, 15, 20, 25, 30];

console.log(bubbleSort(array));