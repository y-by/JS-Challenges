import postData from "./data.js";

/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

function calcAverageLikes(data){
    // reduce to single total
    const sum = data.reduce((acc, curr) => {
        // add current likes to the accumulator
        return acc += curr.likes
    }, 0)
    // divide the total by the length of data to get the average
    const result =  sum / data.length
    return `Iggy's Instagram posts get: ${result.toFixed(0)} 👍 on average`
} 


console.log(calcAverageLikes(postData))
