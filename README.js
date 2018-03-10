# N.03-ANKETA

var userName = prompt("What is your name?", 'Alex');
while (userName.match (/[a-zA-Z]/)===null){
    var userName = prompt('Enter your name correctly');
}
    
var userLastName = prompt("What is your last name?",'Ivanov');

while (userLastName.match (/[a-zA-Z]/)===null){
    var userLastName = prompt('Enter your last name correctly');
}


var age= prompt ('How old are you? Enter number between 1 and 120');

while (isNaN(age)||(+age<1)||(+age>120)) {    
 var age= prompt ('Enter your age, please:a number between 1 and 120','\s');}


var sex = confirm('Are you a man?');
console.log (sex);

var retired=Boolean;

if (((sex==true) && (age >= 60)) && ((sex==false) && (age>=55)) ) {
    retired=true;
} 
else {
    retired=false;
}

if (retired ==true) {
    retiredString='yes';
}

else{
    retiredString='no';
}
alert ('Your full name is : ' + userName + ' ' + userLastName + '\n' + 'Your age is : ' + age + ' years' + '\n' + 'Your age in days : ' + age*365 + '\n'  + 'In five years you will be : ' + (parseInt(age)+parseInt(5)) + '\n' + 'Are you a man? ' + sex + '\n' + 'You are retired : ' + retiredString);


