// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = +prompt("Enter any number")
document.write ("<h2> Result: </h2> <br>")
document.write ("The value of a is: " + a + "<br>")
document.write ("............................... <br><br>")
document.write ("The value of ++a is: " + (++a) + "<br>")
document.write ("Now the value of a is: " + a + "<br><br><br>")
document.write ("The value of a++ is: " + (a++) + "<br>")
document.write ("Now the value of a is: "  + a + "<br><br><br>")
document.write ("The value of --a is: " + (--a) + "<br>")
document.write ("Now the value of a is: " + a + "<br><br><br>")
document.write ("The value of a-- is: " + (a--) + "<br>")
document.write ("Now the value of a is: " + a + "<br>")


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2
var b = 1
var a_final = --a
var b_final = --b + ++b + b--
var result1 = --a
var result2 = --b
var result3 = ++b
var result4 = b--
var finalResult = result1 - result2 + result3 + result4
document.write ("a is " + a + "<br>")
document.write ("b is " + b + "<br><br>")
document.write ("Now a is " + a_final + "<br>")
document.write ("Now b is " + b_final + "<br><br>")
document.write ("Result: " + finalResult + "<br><br>")
document.write ("--a = " + result1 + "<br>")
document.write ("--b = " + result2 + "<br>")
document.write ("++b = " + result3 + "<br>")
document.write ("b-- = " + result4 + "<br>")

// EXPLANATION
         // --a; value of a after decreasing 1 from a. (--a = 2 - 1 = 1)
         // --a - --b; difference of a and b after decreasing one from a and b (--b = 1 - 1 = 0) (--a - --b = 1 - 0 = 1)
         // --a - --b + ++b; difference of a and b after decreasing one from a and b again and adding one in b (--a = 1 - 1 = 0)
    //  (--b = 0 - 0 = 0) (++b = 0 + 1 = 1) (--a - --b + ++b = 0 - 0 + 1 = 1)
         // --a - --b + ++b + b-- a decremented by 1 again, b decremented by 1 again, the add 1 in b again and add value of b 
    //  before decrement (--a = 0-1 = -1) (--b = 0) (++b = 0+1 = 1) (b-- = 1) (-1-0+1+1 = 1)


// 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Enter your Name")
document.write ("Hello, " + userName + "! " + " Welcome to this page." + "<br>")


// 4. Qs not given.


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number,
// multiplication table of 5 should be displayed by default.
var number = prompt("Enter a number")
if (number === null || number === "") {
    number = 5
}
document.write ("<h2>Multiplication Table of " + number + "</h2>" + "<br>")

for (var i = 1; i <= 10; i++) {
    var multiplication = number * i
    document.write (number + "x" + i + "=" + multiplication + "<br>" + "<br>")
}


// 6. 
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subject1 = prompt("Enter First Subject")
var subject2 = prompt("Enter Second Subject")
var subject3 = prompt("Enter Third Subject")
var totalMarks = 100
var marksObtained1 = +prompt("Enter Marks obtained in first subject")
var marksObtained2 = +prompt("Enter Marks obtained in second subject")
var marksObtained3 = +prompt("Enter Marks obtained in third subject")
var percentage1 = (marksObtained1/totalMarks) * 100
var percentage2 = (marksObtained2/totalMarks) * 100
var percentage3 = (marksObtained3/totalMarks) * 100
var totalMarksObtained = marksObtained1 + marksObtained2 + marksObtained3
var totalPercentage = (totalMarksObtained/300) * 100

document.write ("<table>")
document.write ("<h2>Result</h2> <br>")
document.write ("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>")
document.write ("<tr> <td style='text-align:center'> "+ subject1 +" </td> <td style='text-align:center'> "+ totalMarks +" </td> <td style='text-align:center'> "+ marksObtained1+ " </td> <td style='text-align:center'> "+ percentage1 + " % </td> </tr>")
document.write ("<tr> <td style='text-align:center'> "+ subject2 +" </td> <td style='text-align:center'> "+ totalMarks +" </td> <td style='text-align:center'> "+ marksObtained2+ " </td> <td style='text-align:center'> "+ percentage2 + " % </td> </tr>")
document.write ("<tr> <td style='text-align:center'> "+ subject3 +" </td> <td style='text-align:center'> "+ totalMarks +" </td> <td style='text-align:center'> "+ marksObtained3+ " </td> <td style='text-align:center'> "+ percentage3 + " % </td> </tr>")
document.write("<tr> <td style='text-align:center'>Total</td> <td style='text-align:center'>300</td> <td style='text-align:center'>" + totalMarksObtained + "</td> <td style='text-align:center'>" + totalPercentage + " % </td> </tr>");
document.write ("</table>")