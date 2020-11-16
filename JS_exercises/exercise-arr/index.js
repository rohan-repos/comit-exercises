"use strict"
let startArr = [1,2,3,4,5];
let modArr=startArr.map(item=>item*item);
console.log("Array without map:"+startArr);
console.log("Array after map function:"+modArr);

let newStartArr=[1,2,3,4,5,6,7,8,9,10];
let filterEvenRes = newStartArr.filter(item=> !(item%2));
let filterOddRes = newStartArr.filter(item=> (item%2));
console.log("original array:"+newStartArr);
console.log("even numbers:"+filterEvenRes);
console.log("Odd numbers"+filterOddRes);

let objArr= [
    {name:"Abc",age:44,city:"thiscity"},
    {name:"XYZ",age:18,city:"that"},
    {name:"Poppy",age:20,city:"Saskatoon"},
    {name:"Adam",age:20,city:"wjere"},
    {name:"Steve",age:50,city:"why"},
];

let objFilter = objArr.filter(item=>item.age<30);
let objFilterLoc = objArr.filter(item=>item.age<30 && item.city=="Saskatoon");
console.log(objFilter);
console.log(objFilterLoc);
let objArrAge=objArr.map(item=> item.age);
console.log(objArrAge);

function stripVowels(toBeFiltered){
    let strArr = toBeFiltered.split("");
    console.log(strArr);
    let mergedStr=strArr.filter(item=>
        {if(!(item=="a" || item=="e" || item=="o" ||item=="i" || item=="u"))
        {
        return item;
    }});
    return mergedStr.join("");
}

let mergedString=stripVowels("This is a sentence");
console.log("mergedString:"+mergedString);