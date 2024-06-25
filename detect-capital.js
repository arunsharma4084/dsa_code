function detectCapital(word){
    let count = 0;

    for(const char of word){
        if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
            count += 1;
        }
    }

    if(count === 0) return true;
    if(count === word.length) return true;
    if(count === 1 && word[0].charCodeAt() >= 65 && word[0].charCodeAt() <= 90) return true;

    return false;
}

const word1 = 'ARUN';
const word2 = 'arun';
const word3 = 'aRun';
const word4 = 'Arun';

console.log(detectCapital(word1));
console.log(detectCapital(word2));
console.log(detectCapital(word3));
console.log(detectCapital(word4));
