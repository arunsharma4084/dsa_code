function reverseString(string){
    let left = 0;
    let right = string.length - 1;
    const stringArray = string.split('');

    while(left < right){
        [stringArray[left], stringArray[right]] = [stringArray[right], stringArray[left]];
        left += 1;
        right -= 1;
    }

    return stringArray.join('');
}

const string = "Arun";
const reversedString = reverseString(string);
console.log(reversedString);