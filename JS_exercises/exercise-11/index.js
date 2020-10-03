"user strict";
let user={};
console.log(user);
console.log("type is: "+typeof(user));
user.username="batman";
user.password="hunter2";
console.log(user);
let usrName=prompt("Enter username");
let usrPass=prompt("Enter password");
if(usrName==user.username && usrPass==user.password)
{
    console.log("Access Granted");
}
else
{
    console.log("Access Denied");
}

let anotherUser={username:"wonderwoman",
                 password:123123,
                greet(){
                    console.log("Hello I am "+this.username);
                },
                setUsername(user){
                    this.username=user;
                }};

anotherUser.greet();
anotherUser.setUsername("Superman");
anotherUser.greet();