let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
let multiplyNumeric= (obj)=>{
    for(let item in obj){
        if(typeof(obj[item])=="number"){
            obj[item]*=2;
        }
    }
}

multiplyNumeric(menu);
 for(let item in menu){
     console.log(item+" "+menu[item]);
 }
  

 let arr=[1,2,3,4,7,6,1,30,8,9,10];
 let result=arr.sort((a,b)=>a-b);
 console.log("Result: "+result);
