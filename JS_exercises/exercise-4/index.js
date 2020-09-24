"use strict"
let numOne = prompt("Enter the first number to compare.");
let numTwo = prompt("Enter the second number to compare");
console.log("numOne: "+typeof(numOne));
console.log("numTwo: "+typeof(numTwo));
if(numOne > numTwo)
{
    confirm("Number 1 is greater");
}
else if(numTwo > numOne){
    confirm("Number 2 is greater");
}
let res="A";
console.log(res.charCodeAt(0)); //string to unicode
console.log(String.fromCharCode(65));//unicode to string

