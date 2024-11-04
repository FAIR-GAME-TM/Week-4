
// function myFunction(){
//     document.getElementById("Javascript").innerHTML = "You Loose";
//     alert("You did not win, and this is my first time coding, thank you prof battana and levi");
// }


function validateform(){
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const confirmPssword = document.getElementById('confirmpassword').value;

if(password !== confirmPssword){
    alert("Passwords do not match");
    return;
}
else {
    alert("Registration was Succesfull");
}

document.getElementById('registrationForm').submit();
}

function myFunction() { 
    document.getElementById("randomword").innerHTML = "But my full name is Jael Battana"; 
} 
alert()
var dice1 = 5;
var dice2 = 5; 
var sum = dice1+dice2;
console.log('Sum:' + ' ' + sum);  
if(sum == 7 || sum == 11){  
    console.log("Win");  
}  
else if (dice1 == dice2 && dice1%dice2 == 0 ){  
    console.log("Lose");  
}  
else{  
    console.log("Try again");  
} 
