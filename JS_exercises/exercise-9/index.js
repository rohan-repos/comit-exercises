let evenNumbers= ()=>{
    for(let index=1;index<=100;index++)
    {
        if(index%2==0)
        {
           // console.log(index);
        }
    }
};
function showUser(name,age,phone,street,postalCode,married){
    console.log("Name: "+name+"\nAge: "+age+"\nPhone: "+
    phone+"\nStreet: "+street+"\nPostal code: "+postalCode+"\nMarried: "+married);
}

// function showUser(userData)
// {
//     console.log("Name: "+userData.name);
// }

function fibonacciRecur(maxNumber){
    if(maxNumber==0)
    {
        return "Invalid number. Please enter value greater than 0";
    }
    if(maxNumber==1){
        return 0;
    }
    else if(maxNumber==2){
        return 1;
    }
    return fibonacciRecur(maxNumber-1)+fibonacciRecur(maxNumber-2);
}

function fibonacci(maxValue){
    let first=0;
    let second=1;
    let nextVal;
    if(maxValue==1){
        console.log(first);
    }
    else if(maxValue>1){
        console.log(first);
        console.log(second);
    while(maxValue>2){
     nextVal=first+second;
     console.log(nextVal);
     first=second;
     second=nextVal;
     maxValue--;
}
    }
}
function showName(getName){
    console.log("==================\n=  "+getName()+"  =\n==================");
}
evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();
let user1={name:"Abc",age:18,phone:123456789,postalCode:"PLK646",married:Boolean(0)};
//console.log(user1);
//showUser(user1);
showUser("Abc",18,123456789,"123 street","PLK646",Boolean(0));
alert(fibonacciRecur(5));
fibonacci(10);
showName(()=>"Test Name");
showName(()=>"Another Name");
