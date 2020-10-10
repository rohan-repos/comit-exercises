"use strict"
let factorial=(maxVal)=>{
    if(maxVal<0){
        return;
    }
    else if(maxVal==0){
        return 1;
    }

    return maxVal*factorial(maxVal-1);
}

console.log(factorial(4));