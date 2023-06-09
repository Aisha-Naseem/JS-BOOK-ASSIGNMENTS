// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled 
// fullName. Greet the user using his full name.
var fisrtName = prompt("Enter your First name")
var secondName = prompt("Enter your second name")
var fullName = fisrtName + secondName
document.write ("Hello " + fullName + "<br><br>")


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var userInput = prompt("Enter your favorite mobile phone model.")
var length = userInput.length
document.write ("My Favorite phone is: " + userInput + "<br>")
document.write ("Length of String: " + length + "<br><br>")


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
var word = "Pakistani"
var indexOf = word.indexOf("n")
document.write ("String: " + word + "<br>")
document.write ("Index of 'n': " + indexOf + "<br><br>")


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var words = "Hello World"
var indexxOf = words.lastIndexOf("l")
document.write ("String: " + words + "<br>")
document.write ("Last Index of 'l': " + indexxOf + "<br><br>")


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser
var word1 = "Pakistani"
var indexOf1 = word1.charAt(3)
document.write ("String: " + word1 + "<br>")
document.write ("Character at Index 3: " + indexOf1 + "<br><br>")


// 6. Repeat Q1 using string concat() method.
var fisrtName = prompt("Enter your First name")
var secondName = prompt("Enter your second name")
var fullName = fisrtName.concat(" ", secondName)
document.write ("Hello " + fullName + "!" + "<br><br>")


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var word2 = "Hyderabad"
var replace = word2.replace("Hyder", "Islam")
document.write ("City: " + word2 + "<br>")
document.write ("After Replacement: " + replace + "<br><br>")


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together."
var replace1 = message.replaceAll ("and", "&")
document.write ("Original Message: " + message + "<br>")
document.write ("Message After Replacement: " + replace1 + "<br><br>")


// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var string = "472"
var convertedString = +(string)
document.write ("Value before conversion: " + string + "<br>");
document.write ("Type before conversion: " + typeof string + "<br><br>");
document.write ("Value after conversion: " + convertedString + "<br>");
document.write ("Type after conversion: " + typeof convertedString + "<br><br>");


// 10. Write a program that takes user input. Convert and show the input in capital letters.
var userInput = prompt("Enter any word/alphabet")
var converted = userInput.toUpperCase(userInput)
document.write ("User Input: " + userInput + "<br>")
document.write ("Upper Case: " + converted + "<br><br>")


// 11. Write a program that takes user input. Convert and show the input in title case.
var userInput1 = prompt("Enter any word/sentence")
var user = userInput1.split(" ")
var titleCase = " "
for (var i = 0; i < user.length; i++) {
    var users = user[i]
    var letter1 = users.charAt(0).toUpperCase()
    var remainingLetters = users.slice(1).toLowerCase()
    var titleWord = letter1 + remainingLetters 
    titleCase = titleCase + titleWord + " ";
}
document.write("Input: " + userInput1 + "<br>");
document.write("Title Case: " + titleCase + "<br><br>")


// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36
var numTostring = num.toString()
var withoutDot = numTostring.replace(".", "")
document.write("Number: " + num + "<br>")
document.write("Type of Number: " + typeof numTostring + "<br>")
document.write("Number without dot: " + withoutDot + "<br><br>")


// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !],
// prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var username = prompt("Enter your name")
var specialSymbols = ["@", "!", ".", ","]
var isValid = true
for (i=0; i<specialSymbols.length; i++) {
if (username.includes(specialSymbols[i])) {
    isValid = false
    break;
}
}
if (isValid) {
    document.write ("Valid Username: " + username + "<br><br>")
}
else {
    alert ("Please enter a valid username without these special symbols (@ ! . ,).")
}


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Welcome to ABC Bakery! What do you want Sir/Maam?")
var found = false
for (var i=0; i < A.length; i++) {
    if (A[i].toLowerCase === input.toLowerCase) {
    var found = true
    break
    }
    else {
    var found = false
    }
}
if (found) {
    document.write (input + " is available at index " + i + " in our bakery." + "<br>")
}
else {
    document.write ("We are sorry! " + input + " is not available in our bakery."  + "<br><br>")
}


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
var password = prompt("Enter Password")
var hasAlphabet = false
var hasNumber = false
for (i = 0; i<password.length; i++) {
var charCode = password.charCodeAt(i) 
if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122){
    hasAlphabet = true
}
else if (charCode >= 48 && charCode <= 57) {
    hasNumber = true
}
}
if (password.length >= 6 && isNaN(+(password.charAt(0))) && hasAlphabet && hasNumber){
    alert ("Valid Password")
}
else {
    alert("Password is invalid")
}


// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = "University of Karachi"
var array = university.split("")
for (var i = 0; i < array.length; i++) {
    document.write (array[i] + "<br>")
}


// 17. Write a program to display the last character of a userinput.
var userInput = prompt("Enter your input")
var display = userInput.charAt(userInput.length - 1)
document.write ("Userinput: " + userInput + "<br>")
document.write ("Last Character: " + display + "<br><br>")


// 18. You have a string “The quick brown fox jumps over thelazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
var string = "The quick brown fox jumps over the lazy dog.".toLowerCase()
var wordTobeCounted = "the"
var words = string.split(" ")
var count = 0
for (var i = 0; i < words.length; i++) {
if (words[i] === wordTobeCounted) {
count ++
}
}
document.write ("Text: " + string + "<br>")
document.write ("There are " + count + " occurence(s) of the word 'the'." + "<br>")