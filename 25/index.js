import podcasts from "./data.js";

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
    const flatArray = []
    data.forEach(item => {
        console.log(item.hosts)
        flatArray.push(item.hosts)
    });
    const reallyFlatArray = flatArray.flat()
    console.log(reallyFlatArray)
}

function assignAwards(data){
    
}


console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));