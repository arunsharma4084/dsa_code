// function computeChange(coins, amount){
//     let remainingAmount = amount;

//     const calculatedChange = {
//         selectedCoins: {},
//         numberOfCoins: 0
//     }

//     for(const coin of coins){
//         const count = Math.floor(remainingAmount / coin);
//         calculatedChange.selectedCoins[coin] = count;
//         remainingAmount = remainingAmount - (coin * count);
//         calculatedChange.numberOfCoins += count;
//     }

//     return calculatedChange;
// }

// const availableCoins = [100, 50, 20, 10, 5, 2, 1];
// const targetAmount = 66;

// const change = computeChange(availableCoins, targetAmount);
// console.log(change);

function computeChange(coins, amount){
    let remainingAmount = amount;

    const calculatedChange = {
        selectedCoins: {},
        numberOfCoins: 0
    }

    for(const coin of coins){
        const count = Math.floor(remainingAmount / coin);
        calculatedChange.selectedCoins[coin] = count;
        remainingAmount = remainingAmount - (coin * count);
        calculatedChange.numberOfCoins += count;
    }

    return calculatedChange;
}

function computeChangeBruteForce(coins, amount){
    const results = [];
    for(let i = 0; i < coins.length; i++){
        results.push(computeChange(coins.slice(i), amount));
    }

    let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
    let finalResult;

    for(const result of results){
        if(result.numberOfCoins < smallestAmountOfCoins){
            smallestAmountOfCoins = result.numberOfCoins;
            finalResult = result;
        }
    }

    return finalResult;
}

const availableCoins = [8, 6, 5, 1];
const targetAmount = 11;

const change = computeChangeBruteForce(availableCoins, targetAmount);
console.log(change);