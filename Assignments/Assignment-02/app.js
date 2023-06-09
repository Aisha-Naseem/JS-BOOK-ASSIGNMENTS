// 1. Declare a variable called username.
var username = "Ayesha"

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Ayesha Naseem"

// 3. Write script to
     // a) Declare a JS variable, titled message.
     var message
     // b) Assign “Hello World” to variable message
     var message = "Hello World"
     // c) Display the message in alert box.
     alert(message)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "Areesha"
var StudentAge = "17 years old"
var studentGrade = 11
var studentMajor = "Science"
var studentSchool = "Habib Grammar School"
alert ("Student's Name: " + studentName)
alert ("Age: " + StudentAge)
alert ("Class: " + studentGrade)
alert ("Major: " + studentMajor)
alert ("School: " + studentSchool)

// 5. Write a script to display the following alert using one JS variable:
var food = "PIZZA"
var pizzaMessage = ""
for (var i=food.length; i > 0; i--) {
    pizzaMessage += food.slice(0,i)+"\n"
}
alert (pizzaMessage)

// 6. Declare a variable called email and assign to it a string that represents your 
// Email Address(e.g. example@example.com). Show the below mentioned message in an alert box.
// (Hint: use string concatenation)
var email = "ayesha@gmail.com"
var alertMessage = "Your email address is: " + email
alert (alertMessage)

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
// Display the following message in an alert box:
var book = "A Smarter Way to Learn JavaScript"
alert ("I am trying to learn from the book " + book)

// 8. Write a script to display this in browser through JS
var message = "Yah! I can write HTML content through JavaScript"
document.write(message)

// 9. Store following string in a variable and show in alert and browser through JS
var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
document.write(message)
alert (message)



