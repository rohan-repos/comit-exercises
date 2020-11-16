"use strict"
let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length-1)/2]="Classics";
styles.shift();
console.log("array items");
for(let item of styles){
    console.log(item);
}

styles.unshift("Rap","Reggae");
console.log("array items after updating");
for(let item of styles){
    console.log(item);
}
