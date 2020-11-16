let movieChoices = prompt("Enter 3 movies seperated by commas");
let movies=movieChoices.split(",");
for(let item of movies){
    console.log("item:"+item);
}
let toBeReversed = prompt("Enter a sentence to be reversed");
let reversing = toBeReversed.split(" ");
reversing.reverse();
let reversed=reversing.join(" ");
console.log("Reversed:"+reversed);
alert(reversed);