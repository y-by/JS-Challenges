import mediaData from "./data.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

function getUniqueTags(data){
    // // option 1
    // let newData = []
    // for (let i = 0; i < data.length; i++) {
    //     const item = data[i];
    //     newData += item.tags
    // }
    // return [newData]

    // option 2
    const tags = data.map(podcast => podcast.tags).flat()
    const uniqueTags = []
    for (let i = 0; i < tags.length; i++) {
        const item = tags[i];
        if(uniqueTags.includes(item)) {
            console.log(`nothing to see here ${item} again`)
        } else {
            uniqueTags.push(item)
        }
    }
    console.log(tags)
    console.log(uniqueTags)

}

console.log(getUniqueTags(mediaData));

