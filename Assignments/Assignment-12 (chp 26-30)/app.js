// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var integer = +prompt("Enter any number")
var roundOff = Math.round(integer)
var floor = Math.floor (integer)
var ceil = Math.ceil(integer)
document.write("Number: " + integer + "<br>")
document.write("Round off value: " + roundOff + "<br>")
document.write("Floor value: " + floor + "<br>")
document.write("Ceil value: " + ceil + "<br>")


// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var integer1 = +prompt("Enter a negative number")
if (isNaN(integer1) || integer1 >= 0){
    alert ("Please enter a negative number.")
}
else {
var roundOff1 = Math.round(integer1)
var floor1= Math.floor (integer1)
var ceil1 = Math.ceil(integer1)
document.write("Number: " + integer1 + "<br>")
document.write("Round off value: " + roundOff1 + "<br>");
document.write("Floor value: " + floor1 + "<br>");
document.write("Ceil value: " + ceil1 + "<br>");
}


// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var number = +prompt("Enter a number")
var absolute = Math.abs(number)
document.write ("The absolute value of " + number + " is " + absolute+ "<br>")


// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
var dice = Math.floor(Math.random() * 6) + 1
document.write ("random dice value: " + dice + "<br>")


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var coinToss = Math.round(Math.random() * 1) + 1
if (coinToss === 1) {
    var result = "Heads"
}
else {
    var result = "Tails"
}
document.write ("Coin Toss Result: " + coinToss + "<br>")
document.write ("value: " + result + "<br>")


// 6. Write a program that shows a random number between 1 and 100 in your browser.
// var random = Math.floor(Math.random() * 100) + 1
// document.write ("Random number between 1 and 100 is: " + random)


// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
var userInput = +prompt("Enter your weight")
var weight
if (!isNaN(userInput)) {
    var number = +(userInput)
    document.write ("The weight of user is " + userInput + " kilograms")
}
else if (userInput.endsWith("kgs") || userInput.endsWith("kilograms")) {
   var number = +(userInput)
   if (!isNaN(number)) {
    weight = number;
    document.write("The weight of the user is " + weight + " kilograms");
  }
} else {
  document.write("Input is not valid.");
}


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the
// user input equals the secret number, congratulate the user.
var secret = Math.floor(Math.random() * 10) + 1
var userInput1 = prompt ("Enter any number")
if (userInput1 === secret) {
    alert ("Congratulations! you guessed the right number: " + secret)
}
else {
    alert ("Sorry! your guess is wrong. The correct number is: " + secret)
}