//create a function called idCard
function idCard(){

/*
** Create three variables named firstName, lastName, and address. 
Set those variables equal to the DOM element they correspond with 
so it pulls in the value of each input.**
*/
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var age = document.getElementById("age").value;
var address = document.getElementById("address").value;
var fullName = firstName  + " " + lastName;

/*
** Use the DOM innerHTML to post the first and last name to the tag that 
has an id of postFullName. Use the DOM innerHTML to post the address to the 
tag that has an id of postAddress 
Tip! These id's were already included in your html page within the ID card div tag. **
*/
document.getElementById("postFullName").innerHTML = fullName;
document.getElementById("postAddress").innerHTML = "ADDRESS: " + address;

/*
** Create two variables named age and phoneNumber that pulls in the value of the 
corresponding input using DOM Tip! Remember what you need to include when pulling 
in a number using DOM. **
*/
var age = document.getElementById("age").value;
var phoneNumber = document.getElementById("phoneNumber").value;

/*
** Create an empty array named numberArray **
*/
var numberArray =[];
 
/*
** Push both the age and phoneNumber variables into your empty array **
*/
numberArray.push(age, phoneNumber);

/*
** Create a for loop that will loop through numberArray **
*/
for(var i=0;i < numberArray.length;i++){
    if(numberArray [i] <= 100){
        document.getElementById("postAge").innerHTML = "AGE: " + age;
        
    }else if(numberArray[1] > 100){
        document.getElementById("postPhoneNumber").innerHTML = "PHONE: " + phoneNumber;
        
    }
}

/*** Write an if/elseif statement within the for loop **

** Check to see if the numberArray at index i is less than or equal to 100.
If it is, use DOM innerHTML to write "Age: " plus the variable age. **

** Check to see if the numberArray at index i is greater than 100. If it is, 
use DOM innerHTML to write "Phone Number: " plus the variable phoneNumber **

*/
}