/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/
console.log('Palindrome test')
function isPalindrome(str){
    let newStr = ""
    for (let i = str.length -1; i >= 0; i-- ) {
        newStr += str[i]

    }
    console.log(newStr)
    if(str === newStr) {
        result = `About the string ${str} ${true}`
        // console.log(result)
    } else {
        result = result = `About the string ${str} ${false}`
        // console.log(result)
    }
    return result

}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
