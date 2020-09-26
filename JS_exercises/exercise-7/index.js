"use strict"
// Add all the numbers bettwen 0 and 1000 using for statement
const MAXCOUNT=1000;
let index=0;
let sum=0,res=0;
for (index = 0; index < MAXCOUNT; index++) {
    sum += index;
    if(sum>400){
        break;
    }
    res=sum;
    
}
alert("The sum of all the numbers between 0 and "+index+" whose sum is lesser than 400 is: "+res);
console.log("The sum of all the numbers between 0 and "+index+" whose sum is lesser than 400 is: "+res);

// Show numbers from 0 to 10
console.log("Number from 1-10");
console.log("using for loop");
for(let index=1;index<=10;index++){
    console.log(index);
}

let start=0;
console.log("Using while loop");
while(start<10){
    console.log(++start);
}
console.log("Using do while loop");
start=0;
do{
    console.log(++start);
}while(start<10);

// Show numbers from 100 to 0
console.log("Number from 100 to 1");
console.log("using for loop");
for(let index=100;index>=1;index--){
    console.log(index);
}

start=100;
console.log("Using while loop");
while(start>0){
    console.log(start--);
}
console.log("Using do while loop");
start=100;
do{
    console.log(start--);
}while(start>0);


// Show even numbers between 0 and 100
console.log("Even number between 0 and 100");
console.log("using for loop");
for(let index=1;index<=100;index++){
    if(index%2==0)
    {
        console.log(index);
    }
}

start=1;
console.log("Using while loop");
while(start<=100){
    if((start%2)==0){
    console.log(start);
    }
    start++;
}
console.log("Using do while loop");
start=1;
do{
    if((start%2)==0){
        console.log(start);
        }
    start++;
}while(start<=100);

// Produce the following output
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************
console.log("step pattern using for loop")
for (let outer = 0; outer < 13; outer++) {
    for(let inner=0;inner<=outer;inner++){
        console.log("*");
    }
    console.log("\n");
}

let inner=0,outer=0;
console.log("step pattern using while loop");
while(outer<13)
{
    inner=0;
    while(inner<=outer)
    {
        console.log("*");
        inner++;
    }
    console.log("\n");
    outer++;
}

inner=0;outer=0;
console.log("step pattern using do while loop");
do{
    inner=0;
    do
    {
        console.log("*");
        inner++;
    }while(inner<=outer);
    console.log("\n");
    outer++;
}while(outer<13);