alert("Enter two numbers to see if the first is greater than the second");
let numOne = prompt("Enter the first number to compare");
let numTwo = prompt("Enter the second number to compare");
if(numOne>numTwo){
    alert(numOne+" is greater than " +numTwo);
}
else if(numTwo>numOne)
{
    alert(numTwo+" is greater than "+numOne);
}
else{
    alert(numOne+ " :Both numbers are equal");
}