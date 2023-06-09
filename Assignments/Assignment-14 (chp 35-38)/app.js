// 1. Write a function that displays current date & time in your browser.
function displayCurrentDateTime () {
    var currentDate = new Date ()
    var date = currentDate.toDateString()
    var time = currentDate.toLocaleTimeString()
    var timeZone = "PKT"
    document.write (date + " " + time + " GMT" + currentDate.getTimezoneOffset() / -60 + "00 " + "(" + timeZone + ")" + "<br><br>")
}
displayCurrentDateTime()


// 2. Write a function that takes first & last name and then it greets the user using his full name.
function greet () {
    var firstName = prompt ("Enter your first name")
    var secondName = prompt ("Enter your second name")
    alert ("Hello " + firstName + secondName)
}
greet()


// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function numbers () {
    var number1 = +prompt ("Enter first number")
    var number2 = +prompt ("Enter second number")
    var sum = number1 + number2
    alert ("Sum of " + number1 + " and " + number2 + " is " + sum)
}
numbers()


// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// show the desired result in your browser.
function calculator () {
    var num1 = +prompt("Enter first number")
    var num2 = +prompt("Enter second number")
    var operator = prompt("Enter operation to be performed.")
if (operator === "+") {
    var res1 = num1 + num2
    document.write (num1 + " + " + num2 + "<br>")
    document.write ("SUM: " + res1 + "<br><br>")
}
else if (operator === "-") {
    var res2 = num1 - num2
    document.write (num1 + " - " + num2 + "<br>")
    document.write ("Difference: " + res2 + "<br><br>")
}
else if (operator === "*") {
    var res3 = num1 * num2
    document.write (num1 + " x " + num2 + "<br>")
    document.write ("Product: " + res3 + "<br><br>")
}
else if (operator === "/") {
    var res4 = num1 / num2
    document.write (num1 + " / " + num2 + "<br>")
    document.write ("QUOTIENT: " + res4 + "<br><br>")
}
else if (operator === "%") {
    var res5 = num1 % num2
    document.write (num1 + " % " + num2 + "<br>")
    document.write ("REMAINDER: " + res5 + "<br><br>")
}
else {
    document.write ("Invalid Operator" + "<br><br>")
}
}
calculator()


// 5. Write a function that squares its argument.
function square () {
    var numb1 = +prompt("Enter any number to calculate its sqaure")
    var calculateSquare = numb1 * numb1
    document.write ("Square of " + numb1 + " is: " + calculateSquare + "<br><br>")
}
square()


// 6. Write a function that computes factorial of a number.
function calculateFactorial(number) {
    if (number <= 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }  
function factorials() {
    var number11 = +prompt("Enter any number to calculate its factorial");
    var result = calculateFactorial(number11);
  
    if (number11 <= 1) {
      document.write(1);
    } else {
        document.write ("Factorial of " + number11 + " is: " + result + "<br><br>")
    }
  }
factorials();
  

// 7. Write a function that take start and end number as inputs & display counting in your browser.
function displayCounting () {
    var start = +prompt("Enter starting number")
    var end = +prompt("Enter ending number")
    for (var i = start; i <= end; i++) {
        document.write (i + "<br><br>")
    }
}
displayCounting()


// 8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2  
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
function calcHypotenuse () {
    var base = +prompt("Enter base length")
    var perpendicular = +prompt("Enter perpendicular length")
  function calculateSquare (side) {
    return side * side
}
var sqaureofBase = calculateSquare(base)
var sqaureofPerpendicular = calculateSquare(perpendicular)
var sqaureofHypotenuse = sqaureofBase + sqaureofPerpendicular
var hypotenuse = Math.sqrt(sqaureofHypotenuse)

document.write ("Base: " + base + "<br>")
document.write ("Sqaured Base: " + sqaureofBase + "<br>")
document.write ("Perpendicular: " + perpendicular + "<br>")
document.write ("Sqaured Perpendicular: " + sqaureofPerpendicular + "<br>")
document.write ("Squared Hypotenuse: " + sqaureofHypotenuse + "<br>")
document.write ("Hypotenuse: " + hypotenuse + "<br><br>")
}
calcHypotenuse()


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
function calculateArea () {
    var width1 = +prompt ("Enter Width of Rectangle")
    var height1 = +prompt ("Enter Height of Rectangle")
    var area1 = width1 * height1
    document. write ("Width: " + width1 + "<br>")
    document. write ("Height: " + height1 + "<br>")
    document. write ("Area of Rectangle: " + area1 + "<br><br>")
}
calculateArea()


// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function capitalWords () {
    var string = "the quick brown fox"
    var words = string.split(" ")
    for (var i = 0; i < words.length; i++) {
        var w = words[i]
        var capitalWords = w.charAt(0).toUpperCase() + w.slice(1)
        words[i] = capitalWords
    }
    var capitalString = words.join(" ")
    document.write ("EXAMPLE STRING: " + string + "<br>")
    document.write ("EXPECTED OUTPUT: " + capitalString + "<br><br>")   
}
capitalWords()


// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
function findLongestWord  () {
    var string1 = "Web Development Tutorial"
    var words = string1.split(" ")
    var longestLength = ""
    for (var i = 0; i < words.length; i++) {
        var w = words[i]
    if (w.length > longestLength.length){
    longestLength = w   
}
}
    document.write ("EXAMPLE STRING: " + string1 + "<br>")
    document.write ("EXPECTED OUTPUT: " + longestLength + "<br><br>") 
}
findLongestWord()


// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
function occurrences() {
    var inputStr = 'JSResourceS.com'
    var inputLetter = 'o'
    var regex = new RegExp(inputLetter, 'gi')
    var matches = inputStr.match(regex)
  
    if (matches) {
      return matches.length
    } else {
      return 0
    }
  }
  var counting = occurrences()
  document.write(counting + "<br><br>")
  

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference () {
    var radius = +prompt ("Enter radius of a circle for circumference")
    var circumference = 2 * Math.PI * radius
    document.write ("The circumference is " + circumference.toFixed(3) + "<br>")
}
calcCircumference ()
function calcArea () {
    var radius = +prompt ("Enter radius of a circle for area")
    var area2 = Math.PI * Math.pow(radius, 2) 
    document.write ("The area is " + area2.toFixed(3) + "<br>")
}
calcArea()