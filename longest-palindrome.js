function longestPalindrome(string){
    let result = '';

    for(let i = 0; i < string.length; i++){
        word1 = checkPalindrome(string, i, i);
        word2 = checkPalindrome(string, i, i+1);

        let longest;
        if(word1.length > word2.length){
            longest = word1;
        } else {
            longest = word2;
        }

        if(longest.length > result.length){
            result = longest;
        }
    }

    return result;
}

function checkPalindrome(string, left, right){
    while(left >= 0 && right < string.length && string[left] === string[right]){
        left -= 1;
        right += 1;
    }

    result = string.slice(left + 1, right);
    return result;
}

const string1 = 'xyxracecart';
const string2 = 'babaceecad';

console.log(longestPalindrome(string1));
console.log(longestPalindrome(string2));
