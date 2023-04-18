/* 
isAnagram?
Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 














function isAnagram(str1, str2){
    // are the strings the same length? if yes return false. 
    if(str1.length !== str2.length) return false
    
    // split strings into an array
    // sort arrays
    // join the arrays back together as a strings
    const str1New = str1.split('').sort().join('')
    const str2New = str2.split('').sort().join('')
    // are the two words equal? true or false
    console.log(str1New === str2New)
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("measure", "mesaure"));
console.log(isAnagram("inch", "chin"));
console.log(isAnagram("night", "thing"));