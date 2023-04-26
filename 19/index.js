import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    // console.log(arr)
    const numbersArray = []
    arr.map(({price}) => numbersArray.push(price))
    const output = 0
    const sumAll = numbersArray.reduce (
        (a, b) => a + b, output
    )
    return `The output is: ${sumAll.toFixed(2)}`
}

console.log(total(shoppingCart));
