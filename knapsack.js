function knapsackFn(items, cap, itemIndex, memo){
    console.log('RUNNING');
    console.log(memo);
    console.log(cap, itemIndex);
    console.log(memo[cap][itemIndex]);
    if(memo[cap][itemIndex]){
        return memo[cap][itemIndex];
    }

    
    if(cap === 0 || itemIndex < 0){
        return {items: [], value: 0, weight: 0};
    }

    if(items[itemIndex].weight > cap){
        return knapsackFn(items, cap, itemIndex - 1, memo);
    }

    const sackWithItem = knapsackFn(items, cap - items[itemIndex].weight, itemIndex - 1, memo);
    const sackWithoutItem = knapsackFn(items, cap, itemIndex-1, memo);

    const valueWithItem = sackWithItem.value + items[itemIndex].value;
    const valueWithoutItem = sackWithoutItem.value;

    let resultsack;

    if(valueWithItem > valueWithoutItem){
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight
        }
        resultsack = updatedSack
    } else {
        resultsack = sackWithoutItem;
    }

    memo[cap][itemIndex] = resultsack;
    return resultsack;
}

function knapsack(items, cap, index){
    const mem = Array.from(Array(cap+1), () => Array(items.length).fill(undefined));
    return knapsackFn(items, cap, index, mem)
}

const items = [
    {name: 'a', value: 3, weight: 3},
    {name: 'b', value: 6, weight: 8},
    {name: 'c', value: 10, weight: 3},
    {name: 'd', value: 10, weight: 2}
];

const maxCap = 8;

const sack = knapsack(items, maxCap, items.length - 1);

console.log(sack);