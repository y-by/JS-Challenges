/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  "night": "🌙",
  "barf": "🤮",
  "smile": "😊",
  "angry": "😠",
  "party": "🎉",
  "heart": "💜",
  "cat":   "🐱",
  "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){
    // starts or ends with colon?
        // no: return word 
    if (!word.startsWith(":") && !word.endsWith(":")) return word
    
    // yes: remove colons 
    const slice = word.slice(1, -1)
    // exists in emoji object? 
    if (emojis[slice]) {
      // yes: return emoji 
      return emojis[slice]
      // no: return the word
    } return slice
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
  const phraseWords = phrase.split(' ')
  const withEmojis = phraseWords.map(word => emojifyWord(word))
  const theNewPhrase = withEmojis.join(' ')
  return theNewPhrase;
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
console.log(emojifyPhrase("I :heart: to :smile:"));
console.log(emojifyPhrase("my :cat: miao my :dog: and they :party: all :night: and in the morning :barf: together"))