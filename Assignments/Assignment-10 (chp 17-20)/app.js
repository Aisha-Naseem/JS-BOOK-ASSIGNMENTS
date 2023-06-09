// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
var multidimensionalArray = [[]]
var multidimensionalArray = [[], [], [], []]
var multidimensionalArray = [[["a", "b"], ["c", "d"], ["e", "f"], ["g", "h"], ["i", "j"]]]


// 2. Declare and initialize a multidimensional array representing the following matrix:
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
var table = "<table>"
for (var i = 0; i < matrix.length; i++) {
  table += "<tr>"
  for (var f = 0; f < matrix[i].length; f++) {
    table += "<td>" + matrix[i][f] + "</td>"
}
  table += "</tr>"
}
table += "</table>"
document.write(table  + "<br>")


// 3. Write a program to print numeric counting from 1 to 10
var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i=0; i<count.length; i++) {
    document.write (count[i] + "<br>")
}


// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
var input = +prompt("Enter Table Number")
var input1 = +prompt("Enter Table Length")
document.write ("Multiplication Table of " + input + " ; " + " Length: " + input1 + "<br>")

for (var i = 1; i <= input1; i++) {
    document.write (input + " x " + i + " = " + (input * i) + "<br>")
}


// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.write (fruits[i], "<br>")
}

for (var i = 0; i < fruits.length; i++) {
document.write ("Element at Index "  + i + " is " + fruits[i] + "<br>")
}


// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var counting = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15]
document.write ("<b>Counting: </b> " + "<br><br>")
document.write (counting + "<br><br>")
var reverseCounting = [10 , 9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1]
document.write ("<b>Reverse Counting: </b> " + "<br><br>")
document.write (reverseCounting + "<br><br>")
var even = [0 , 2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18 , 20]
document.write ("<b>Even: </b> " + "<br><br>")
document.write (even+ "<br><br>")
var odd = [1 , 3 , 5 , 7 , 9 , 11 , 13 , 15 , 17 , 19]
document.write ("<b>Odd: </b> " + "<br><br>")
document.write (odd + "<br><br>")
var series = ["2k" , "4k" , "6k" , "8k" , "10k" , "12k" , "14k" , "16k" , "18k" , "20k"]
document.write ("<b>Series: </b> "+ "<br><br>")
document.write (series+ "<br><br>")


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in 
// the list or not. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Welcome to ABC Bakery! What do you want Sir/Maam?")
var found = false
for (var i=0; i < A.length; i++) {
    if (A[i] === input) {
    var found = true
    break
    }
    else {
    var found = false
    }
}
if (found) {
    document.write (input + " is available at index " + i + " in our bakery."  + "<br>")
}
else {
    document.write ("We are sorry! " + input + " is not available in our bakery."  + "<br>")
}


// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
var ABC = [24, 53, 78, 91, 12]
document.write ("Array Items: " + ABC + "<br>")
var large = ABC[0]
for (var i = 0; i < ABC.length; i++) {
    if (ABC[i] > large) {
        var large = ABC[i]
    }
}
document.write ("The largest number is: " + large + "<br>")


// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
var ABCD = [24, 53, 78, 91, 12]
document.write ("Array Items: " + ABCD + "<br>")
var small = ABCD[0]
for (var i = 0; i < ABCD.length; i++) {
    if (ABCD[i] < small) {
        var small = ABCD[i]
    }
}
document.write ("The smallest number is: " + small + "<br>")


// 10. Write a program to print multiples of 5 ranging 1 to 100.
var multiplesOf5 = []
for (var i=1; i <= 100; i++) {
    if (i % 5 === 0) {
        multiplesOf5.push(i)
    }
}
document.write (multiplesOf5.join(", "))