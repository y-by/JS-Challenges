/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]
// // first try
// function isAnagramInArray(anagram, arr){
//     // for (let i = 0; i < arr.length; i++) {
//     //     const element = arr[i];
//     //     if(element == anagram){
//     //         console.log(element)
//     //     }
//     // }
//     // if(arr.includes(anagram)) {
//     //     console.log("yes")
//     // }
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         element = element.toLowerCase()
//         anagram = anagram.toLowerCase()

//         element = element.split("").sort().join("")
//         anagram = anagram.split("").sort().join("")
//         console.log(anagram === element)
//         console.log(anagram)
//         console.log(element)
//         // if(anagram === element) {
//         //     console.log(element)
//         // }
//     }
// }

// second try
function sortPhrase(phrase) {
    return phrase.toLowerCase().split("").sort().join("").trim()
}
function isAnagramInArray(anagram, arr) {
    // use .filter()
    return arr.filter(item => {
        const word1 = sortPhrase(anagram)
        // use sortPhrase() to sort both the input phrase and the current phrase in the array
        const word2 = sortPhrase(item)
        // compare the two words to return true or false
        return word1 === word2
        
    })
}

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));
console.log(isAnagramInArray("treat", ["tater", "tree", "teart", "tetra", "heart", "hamster"]))



