// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var numberr1 = +prompt("enter 1st number")
var numberr2 = +prompt("enter 2nd number")
var sum = numberr1 + numberr2
document.write ("Sum of " + numberr1 + " and " + numberr2 + " is " + sum + "<br>")


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var number1 = +prompt("enter first number")
var number2 = +prompt("enter second number")
var difference = number1 - number2
document.write ("Difference of " + number1 + " and " + number2 + " is " + difference + "<br>")

var number1 = +prompt("enter first number")
var number2 = +prompt("enter second number")
var product = number1 * number2
document.write ("Product of " + number1 + " and " + number2 + " is " + product + "<br>")

var number1 = +prompt("enter first number")
var number2 = +prompt("enter second number")
var quotient = number1 / number2
document.write ("Quotient of " + number1 + " and " + number2 + " is " + quotient + "<br>")

var number1 = +prompt("enter first number")
var number2 = +prompt("enter second number")
var modulus = number1 % number2
document.write ("Remainder of " + number1 + " and " + number2 + " is " + modulus + "<br>")


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var initialNumber
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write ("Value after variable declaration is " + initialNumber + "<br>")
// c. Initialize the variable with some number.
initialNumber = 10
// d. Show the value of variable in your browser like “Initial value: 5”.
document.write ("Initial Value: " + initialNumber + "<br>")
// e. Increment the variable.
initialNumber ++
// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write ("Value after increment is: " + initialNumber + "<br>")
// g. Add 7 to the variable.
initialNumber += 7
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write ("Value after addition is: " + initialNumber + "<br>")
// i. Decrement the variable.
initialNumber --
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write ("Value after decrement is: " + initialNumber + "<br>")
// k. Show the remainder after dividing the variable’s value by 3.
var remainder = initialNumber % 3
// l. Output : “The remainder is : 0”.
document.write ("The remainder is: " + remainder + "<br>")


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var priceperticket = 600
var totalTickets = 5
var totalCost = priceperticket * totalTickets
document.write ("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + "PKR" + "<br>")


// 5. Write a script to display multiplication table of any number in your browser.
var numbers = +prompt("Enter a number")
for (var i = 1; i <= 10; i++) {
    document.write (numbers + " x " + i + " = " + " " + (numbers*i) + "<br>")
}


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
var celsius = +prompt("Enter temperature in °C")
var celsiustoFahrenheit = (celsius * 9/5) + 32
document.write (celsius + "°C is " + celsiustoFahrenheit + "°F" + "<br>")

var fahrenheit = +prompt("Enter temperature in °F")
var fahrenheittoCelsius = (fahrenheit - 32) * (5/9)
document.write (fahrenheit + "°F is " + fahrenheittoCelsius + "°C" + "<br>")


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var price1 = +prompt("Enter price of item 1")
var price2 = +prompt("Enter price of item 2")
var quantity_ordered1 = +prompt("Enter quantity ordered of item 1")
var quantity_ordered2 = +prompt("Enter quantity ordered of item 2")
var shippingCharges = +prompt("Enter shipping charges")
var totalCost = (price1*quantity_ordered1) + (price2*quantity_ordered2) + shippingCharges

document.write("<h1>Shopping Cart Receipt</h1>")
document.write("Price of item 1 is: " + price1 + "<br>")
document.write("Quantity of item 1 is: " + quantity_ordered1 + "<br>")
document.write("Price of item 2 is: " + price2 + "<br>")
document.write("Quantity of item 2 is: " + quantity_ordered2 + "<br>")
document.write("Shipping Charges: " + shippingCharges + "<br><br>")
document.write("Total cost of your order is: " + totalCost + "<br>")


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = +prompt("Enter Total Marks")
var marksObtained = +prompt("Enter Marks Obtained")
var percentage = (marksObtained/totalMarks)*100
document.write("<h1>Marks Sheet</h1>")
document.write ("Total Marks: " + totalMarks + "<br>")
document.write ("Marks Obtained: " + marksObtained + "<br><br>")
document.write ("Percentage: " + percentage + "%" + "<br>")


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in
// a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var US$ = 10
var SAR = 25
var PKR = (US$*104.80) + (SAR*28)
document.write("<h1>Currency in PKR</h1> <br>")
document.write ("Total currency in PKR is: " + PKR + "<br>")


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var number =  +prompt("Enter any number")
var solution = ((number+5)*10)/2
document.write ("Result: " + solution + "<br>")


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NNyears old”.
var currentYear = new Date().getFullYear()
var birthYear = 2000
var age_1 = currentYear - birthYear
var age_2 = age_1 - 1
document.write ("<h1>Age Calculator</h1> <br>")
document.write ("Current Year: " + currentYear + "<br>")
document.write ("Birth Year: " + birthYear + "<br>")
document.write ("They are either " + age_1 + " or " + age_2 + " years old." + "<br>")


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = +prompt("Enter radius")
var circumference = 2 * Math.PI * radius
var area = Math.PI * Math.pow(radius, 2)
document.write ("<h1> The Geometrizer </h1> <br>")
document.write ("Radius of a circle: " + radius + "<br>")
document.write ("The circumference is: " + circumference + "<br>")
document.write ("The area is: " + area + "<br>")

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var favoriteSnack = prompt("Enter your favorite snack")
var currentAge = +prompt("Enter your current age")
var maximumAge = 65
var estimatedAmount = +prompt("Estimated amount per day")
var result = (maximumAge - currentAge) * estimatedAmount
document.write ("<h1> Lifetime Supply Calculator </h1> <br>")
document.write ("Favorite Snack: " + favoriteSnack + "<br>")
document.write ("Current Age: " + currentAge + "<br>")
document.write ("Expected Maximum Age: " + maximumAge + "<br>")
document.write ("Estimated Amount (Per Day): " + estimatedAmount + "<br>")
document.write ("You will need " + result + "  " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "<br>")