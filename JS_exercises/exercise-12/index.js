let avengers = new Array ("Ironman","Thor");
console.log(avengers);
let xmen= ["Wolverine","Storm"];
let superHeroes=avengers.concat(xmen);
console.log("After concat");
console.log(superHeroes);
superHeroes.push("Deadpool");
console.log(`After adding element: ${superHeroes}`);
superHeroes.reverse();
console.log("Reverse: "+superHeroes);
console.log("At index 4: "+superHeroes[4]);
superHeroes[4]="Magneto";
console.log("At index 4 after updating: "+superHeroes[4]);
console.log(superHeroes);
console.log("Elements in the array are:");
console.log("Using for loop");
for(let index=0;index<superHeroes.length;index++){
    console.log(superHeroes[index]);
}
console.log("\nUsing for..of loop");
for(let heroName of superHeroes){
    console.log(heroName);
}

function map(arr, func) {
    let resultArray= new Array();
    for(let item of arr){
        let itemToStore=func(item);
        resultArray.push(itemToStore);
    }
    return resultArray;
}
  
  const result = map([1, 2, 3], function(item) {
    return item * 2;
  });
  
  console.log(result); // [2, 4, 6]