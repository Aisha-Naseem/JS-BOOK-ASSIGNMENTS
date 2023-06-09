// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = "22"
alert ("I am " + age + " years old")

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
var totalVisits = localStorage.getItem('visits')
var message = "You have visited this site " + totalVisits + " times"
alert (message)

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2000
var message1 = "My birth year is 2000<br>Data type of my declared variable is number."
document.write (message1 + "<br>")

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var vistorName = "John Doe"
var productTitle = "T-Shirt(s)"
var quantity = 5
document.write (vistorName + " ordered" + " " + quantity + " " + productTitle + " on XYZ clothing store." + "<br>")
