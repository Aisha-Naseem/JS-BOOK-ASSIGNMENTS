// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var cityName = prompt("Enter City Name")
if (cityName === "Karachi" || cityName === "karachi") {
    document.write ("Welcome to the City of Lights" + "<br>")
}


// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female,
// give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender")
if (gender === "Male" || gender === "male") {
    document.write ("Good Morning Sir" + "<br>")
}
else {
    document.write ("Good Morning Ma'am" + "<br>")
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color = prompt("Enter signal color")
if (color === "Red" || color === "red") {
document.write ("Must Stop!" + "<br>")
}
else if (color === "Yellow" || color === "yellow") {
    document.write ("Ready to Move"  + "<br>")
}
else if (color === "Green" || color === "green") {
    document.write ("Move Now" + "<br>")
}
else {
    document.write ("Signal color entered is not valid." + "<br>")
}


// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the 
// message “Please refill the fuel in your car”
var remainingFuel = +prompt("Enter Remaining Fuel in Car (in Litres)")
if (remainingFuel < 25) {
document.write ("Please refill the fuel in your car!" + "<br>")
}


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");      // displayed
}
// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");      // would not be displayed
}
// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");       // would not be displayed
}
if (c === 13){
alert("condition 2 is true");      // displayed
}
if (++c < 14){
alert("condition 3 is true");      // would not be displayed
}
if(c === 14){
alert("condition 4 is true");     // displayed
}
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");      // displayed same message without total cost
}
// e. 
if (true){
alert("True");         // displayed
}
if (false){
alert("False");        // would not be displayed
}
// f. 
if("car" < "cat"){
    alert("car is smaller than cat");      // displayed
    }


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:
var totalMarks = 300
var marksObtained1 = +prompt("Enter Marks obtained in English")
var marksObtained2 = +prompt("Enter Marks obtained in Maths")
var marksObtained3 = +prompt("Enter Marks obtained in Urdu")
var totalMarksObtained = marksObtained1 + marksObtained2 + marksObtained3
var totalPercentage = (totalMarksObtained/totalMarks) * 100

if (totalPercentage >= 80) {
    var grade = "A-One"
    var remarks = "Excellent"
}
else if (totalPercentage >= 70) {
    var grade = "A"
    var remarks = "Good"
}
else if (totalPercentage >= 60) {
    var grade = "B"
    var remarks = "You need to improve"
}
else if (totalPercentage < 60) {
    var grade = "Fail"
    var remarks = "Sorry"
}
document.write ("<h1>Marks Sheet</h1> <br>")
document.write ("Total Marks: " + totalMarks + "<br>")
document.write ("Marks Obtained: " + totalMarksObtained + "<br>")
document.write ("Percentage: " + totalPercentage.toFixed(2) + "%" + "<br>")
document.write ("Grade: " + grade + "<br>")
document.write ("Remarks: " + remarks + "<br>")


// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var secretNumber = Math.floor(Math.random() * 10) + 2
var guessedNumber = +prompt("Guess the secret number")
if (guessedNumber === secretNumber) {
   document.write ("Bingo! Correct answer" + "<br>")
}
else if (guessedNumber === secretNumber + 1) {
    document.write ("Close enough to the correct answer" + "<br>")
}
else {
    document.write ("Sorry! the guess is wrong." + "<br>")
}


// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var number = +prompt("Enter any number")
if (number % 3 === 0) {
    document.write ("The number " + number + " is divisible by 3." + "<br>")
}
else {
document.write ("The number " + number + " is not divisible by 3." + "<br>")
}

// 9. Write a program that checks whether the given input is an even number or an odd number.
var userData = prompt("Enter any number")
if (userData % 2 === 0) {
    document.write ("The number " + userData + " is even." + "<br>")
}
else {
    document.write ("The number " + userData + " is odd." + "<br>")
}


// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var temperature = +prompt("Enter temperature today")
if (temperature > 40) {
    document.write ("It is too hot outside." + "<br>")
}
else if (temperature > 30) {
    document.write ("The weather today is normal." + "<br>")
}
else if (temperature > 20) {
    document.write ("Today’s Weather is cool." + "<br>")
}
else if (temperature > 10) {
    document.write ("OMG! Today’s weather is so Cool." + "<br>")
}


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var firstNumber = +prompt("Enter First Number")
var secondNumber = +prompt("Enter Second Number")
var operation = prompt("Enter the operation")

if (operation === '+') {
 var result = firstNumber + secondNumber
}
else if (operation === '-') {
    var result = firstNumber - secondNumber
}
else if (operation === '*') {
 var result = firstNumber * secondNumber
}
else if (operation === '/') {
    var result = firstNumber / secondNumber
}
else if (operation === '%') {
    var result = firstNumber % secondNumber
}
else {
    document.write ("Operation entered is invalid" + "<br>")
}
document.write ("First Number: " + firstNumber + "<br>")
document.write ("Second Number: " + secondNumber + "<br>")
document.write (firstNumber + " " + operation + " " + secondNumber + "<br>")
document.write ("Result is: " + result + "<br>")