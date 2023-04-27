import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    // // first option
    // const numbersArray = []
    // arr.map(({price}) => numbersArray.push(price))
    // const sumAll = numbersArray.reduce ((acc, curr) => {
    //     return acc + curr
    // }, 0)
    // console.log(numbersArray)
    // return `The output is: ${sumAll.toFixed(2)}`

    // second option
    const total = arr.reduce((acc, curr) => {
        return acc + curr.price
    }, 0)
    return total.toFixed(2)
}

console.log(total(shoppingCart));
