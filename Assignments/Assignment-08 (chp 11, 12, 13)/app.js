// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter
//    or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var input = prompt("Enter a character either number or letter:");
var ascii = input.charCodeAt(0);
if (ascii >= 48 && ascii <= 57) {
    document.write("The input is a number." + "<br>");
} else if (ascii >= 65 && ascii <= 90) {
    document.write("The input is an uppercase letter." + "<br>");
} else if (ascii >= 97 && ascii <= 122) {
    document.write("The input is a lowercase letter." + "<br>");
} else {
    document.write("The input is neither a number nor a letter." + "<br>");
}


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var integer1 = +prompt("Enter First Integer")
var integer2 = +prompt("Enter Second Integer")
if (integer1 > integer2) {
    document.write ("The larger number is: " + integer1 + "<br>")
}
else if (integer2 > integer1) {
    document.write ("The larger number is: " + integer2 + "<br>")
}
else {
    document.write (integer1 + " = " + integer2 + "<br>")
}


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var number = +prompt("Enter any number")
if (number > 0) {
    document.write ("The number is positive." + "<br>")
}
else if (number < 0) {
    document.write ("The number is negative." + "<br>")
}
else {
    document.write ("The number is zero" + "<br>")
}


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var anyCharacter = prompt("Enter any character (single character)")
if (anyCharacter === "a" || anyCharacter === "A" || anyCharacter === "e" || anyCharacter === "E" || anyCharacter === "i" 
||anyCharacter === "I" || anyCharacter === "o" || anyCharacter === "O" || anyCharacter === "u" || anyCharacter === "U") {
    document.write ("True" + "<br>")
}
else {
    document.write ("False" + "<br>")
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
//    i. Check if user has entered password. If not, then give message “ Please enter your password”
//    ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered
//     matches the original password”. Show “Incorrect password” otherwise.
var correctPassword = "alpha"
var userInput = prompt("Enter password.")
if (userInput === ""){
    alert ("Please enter your password!")
}
else if (userInput === correctPassword) {
    document.write ("Correct! The password you entered matches the original password." + "<br>")
}
else {
    document.write ("Incorrect password!" + "<br>")
}


// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}
     var greeting;
     var hour = 13;
     if (hour < 18) {
     greeting = "Good day"
     document.write (greeting + "<br>")
     }
     else{
     greeting = "Good evening";
     document.write (greeting + "<br>")
     }


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements
var time = +prompt("Enter Time in 24-hour format (like 1900 = 7pm)")
if (isNaN(time) || time.toString().length !== 4) {
    alert ("Please use 24 hour format")
}
else if (time >= 0 && time < 1200) {
document.write ("Good Morning!" + "<br>")
}
else if (time >= 1200 && time < 1700) {
    document.write ("Good Afternoon!" + "<br>")
}
else if (time >= 1700 && time < 2100) {
    document.write ("Good Evening!" + "<br>")
}
else if (time >= 2100 && time < 2359) {
    document.write ("Good Morning!" + "<br>")
}
else {
    document.write ("Invalid time entered" + "<br>")
}