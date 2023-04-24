/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🥓 bacon",
    "🥦 broccoli", 
    "🌶️ hot sauce",
    "🥓 bacon", 
    "🥦 broccoli" 
]

function removeDupesFromArray(arr){
    // good solution for small arrays
    //  // create a new arr to hold unique items    
    // const recipe = []
    // // for each item in recipe arr
    //     // if the item is NOT yet in the unique arr, push it in
    //     // if it is in the unique arr, move on to the next item (do nothing)    
    // for (let i = 0; i < arr.length; i++) {
    //     const ingredient = arr[i];
    //     console.log(ingredient)
    //     if(!recipe.includes(ingredient))
    //     recipe.push(ingredient)
    // }
    // console.log(`original recipe have ${eggScrambleRecipe.length} items`)
    // console.log(`new recipe have ${recipe.length} items`)
    // // return the unique arr 
    // return recipe


    // beter solution for all size arrays
    // create a new object to keep track of duplicates 
    const trackDupes = {}
    // use filter to loop thorugh each item in the arr
    // for each item in arr
    // look up the item in the lookup table
    return arr.filter(item => {
        // if the item does NOT exist in the lookup, add it and return true
        if(!trackDupes[item]) {
            trackDupes[item] = true
            return true
        }
        // return false
        return false
    })


    // // very short option to solve this challenge
    // return [...new Set(arr)]
    
}

console.log(removeDupesFromArray(eggScrambleRecipe));