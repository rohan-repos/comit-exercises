let currentHour = +prompt("Enter the current hour(24-hour time format");
if(currentHour<0 || currentHour>23){
    alert("Incorrect value for hour. Please enter a value between 0-23");
}
else if(currentHour<8 || currentHour>=18)
{
    alert("The hour entered is outside of office hours");
}
else{
    alert("We are open!");
}