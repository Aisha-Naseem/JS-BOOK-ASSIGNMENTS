// 1. Declare an empty array using JS literal notation to store student names in future.
var studentsName = []


// 2. Declare an empty array using JS object notation to store student names in future.
var studentsName = new Array()


// 3. Declare and initialize a strings array.
var strings = ["ant", "box", "cat", "dog"]


// 4. Declare and initialize a numbers array.
var numbers = [11, 12, 13, 14, 15]


// 5. Declare and initialize a boolean array.
var boolean = [true, false]


// 6. Declare and initialize a mixed array.
var mixed = ["hello" , 4560, true]


// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS,
//     M. Phil., PhD). Show the listed qualifications in your browser like:
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
  document.write ("Qualifications: " + "<br> <br> <br>")
for (var i = 0; i < education.length; i++) {
  document.write ((i+1) + ") " + education[i] + "<br>")
}


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that 
//    total marks are 500 for each student, display the scores & percentages of students like:
var names = ["Michael", "John", "Tony"]
var scores = [320, 230, 480]
var totalMarks = 500
 
for (var i=0; i<names.length; i++) {
var percentage = (scores[i] / totalMarks) * 100
document.write ("Score of " + names[i] + " is " + scores[i] + "." + " Percentage: " + percentage + "%" + "<br>")
}


// 9. Initialize an array with color names. Display the array elements in your browser.
var colors = ["blue", "green", "yellow"]
document.write("<b>Original Array:</b> " + colors.toString() + "<br><br>")

// //        a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated
// //        array in your browser.
var addToBeginning = prompt("Enter Color to add to the beginning")
colors.unshift (addToBeginning)
document.write("<b>After Adding Color to the Beginning: </b> " + colors.toString() + "<br><br>")

// //        b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in 
// //        your browser.
var addToEnd = prompt("Enter Color to add to the end")
colors.push (addToEnd)
document.write("<b>After Adding Color to the End: </b> " + colors.toString() + "<br><br>")

// //        c. Add two more color to the beginning of the array. Display the updated array in your browser.
colors.unshift("black", "grey")
document.write("<b>After Adding Two More Colors to the Beginning: </b> " + colors.toString() + "<br><br>")

// //        d. Delete the first color in the array. Display the updated array in your browser.
colors.shift()
document.write("<b>After Deleting first Color from the Array: </b> " + colors.toString() + "<br><br>")

// //        e. Delete the last color in the array. Display the updated array in your browser.
colors.pop()
document.write("<b>After Deleting last Color from the Array: </b> " + colors.toString() + "<br><br>")

// //        f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
// //        Display the updated array in your browser.
var indexToAdd = prompt("Enter the index where you want to add a color (0 - " + colors.length + "):");
var colorToAddIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAddIndex);
document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.toString() + "<br><br>");

// //        g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same 
// //        number of color(s) from user-defined position/index. . Display the updated array in your browser.
var indexToDelete = prompt("Enter the index from where you want to delete color(s) (0 - " + colors.length + "):");
var numToDelete = prompt("Enter the number of colors you want to delete from index " + indexToDelete + ":");
colors.splice(indexToDelete, numToDelete);
document.write("<b>After Deleting last Color from the Array: </b> " + colors.toString() + "<br><br>")
document.write("<b>After deleting color(s) from index " + indexToDelete + ":</b> " + colors.toString() + "<br><br>");


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var scores = [90, 70, 60, 80, 30]
document.write ("<b> Original Array: </b> " + scores + "<br> <br>")
scores.sort (function (a,b) {
return a - b
})
document.write ("<b> New Array (Ascending Order): </b> " + scores + "<br> <br>")


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
var selectedCities = []
document.write ("<b> City Names: </b>" + cityNames + "<br><br>")
selectedCities.push (cityNames[2])
selectedCities.push (cityNames[3])
selectedCities.push (cityNames[4])
document.write ("<b> Selected Cities: </b>" + selectedCities)


// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];    (Use array’s join method)
var arr = ["This", "is", "my", "cat"]
var newArr = arr.join(" ")
document.write ("<b>Array: </b>" + arr + "<br><br>")
document.write ("<b>String: </b>" + newArr )


// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. 
// (FIFO-First In First Out)
var newArr = ["Cat", "Dog", "Ball"]
document.write ("Original Array: " + newArr + "<br><br>")
document.write (newArr.shift() + "<br><br>")
document.write (newArr.shift() + "<br><br>")
document.write (newArr.shift() + "<br><br>")


// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out)
var newArr = ["Cat", "Dog", "Ball"]
document.write ("Original Array: " + newArr + "<br><br>")
document.write (newArr.pop() + "<br><br>")
document.write (newArr.pop() + "<br><br>")
document.write (newArr.pop() + "<br><br>")


// 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:
var phoneManufacturers = ["Apple", "Samsung", "Motorola" + "Nokia" + "Sony" + "Haier"]
var selectElement = document.createElement("select");
for (var i = 0; i < phoneManufacturers.length; i++) {
  var optionElement = document.createElement("option");
  optionElement.textContent = phoneManufacturers[i];
  selectElement.appendChild(optionElement);
}
document.body.appendChild(selectElement);