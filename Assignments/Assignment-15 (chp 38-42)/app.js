// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.\
function power (a, b) {
    var result = Math.pow(a, b)
    document.write (result)
}


// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
function leapYear () {
    var year = +prompt ("Enter year")
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        document.write (year + " is a leap year.")
    }
    else {
        document.write (year + " is not a leap year.")
    }
}
leapYear()


// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
function calculateArea(a, b, c) {
    var s = (a + b + c) / 2
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area
}
function area() {
    var length1 = +prompt("Enter length of side 1")
    var length2 = +prompt("Enter length of side 2")
    var length3 = +prompt("Enter length of side 3") 
    var triangleArea = calculateArea(length1, length2, length3)
    document.write("Area of the triangle is: " + triangleArea)
} 
area ()


// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
function calculateAverage(marks1, marks2, marks3) {
    var average = (marks1 + marks2 + marks3) / 3
    return average
}
function calculatePercentage (totalMarks, obtainedMarks) {
    var percentage = (obtainedMarks/totalMarks) * 100
    return percentage
}
function main () {
    var marks1 = +prompt("Enter marks obtained in English")
    var marks2 = +prompt("Enter marks obtained in Maths")
    var marks3 = +prompt("Enter marks obtained in Urdu")
    var average = calculateAverage(marks1, marks2, marks3)
    var percentage = calculatePercentage(300, (marks1 + marks2 + marks3))
    document.write("Average Marks: " + average.toFixed(2) + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%");
}
main ()


// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
function deleteVowels () {
    var sentence = prompt ("Enter any sentence")
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    var final = ""
    for (var i = 0; i < sentence.length; i++) {
        var words = sentence[i]
        if (!vowels.includes(words)) {
            final += words
        }   
    }
    document.write (final)
}
deleteVowels ()


// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
// var distanceKM = +prompt("Enter distance in Km")
// document.write ("Distance in Km: " + distanceKM + "km" +"<br>")
function meters () {
    // var distanceKM = +prompt("Enter distance in Km")
    var distanceMeter = distanceKM * 1000
    document.write ("Distance in meters: " + distanceMeter + "m" + "<br>")
}
meters()
function feet () {
    // var distanceKM = +prompt("Enter distance in Km")
    var distanceFeet = distanceKM * 3280.84
    document.write ("Distance in feet: " + distanceFeet + "ft" + "<br>")
}
feet ()
function inches () {
    // var distanceKM = +prompt("Enter distance in Km")
    var distanceInches = distanceKM * 39370
    document.write ("Distance in inches: " + distanceInches + "inches" + "<br>")
}
inches ()
function centimeters () {
    // var distanceKM = +prompt("Enter distance in Km")    
    var distanceCM = distanceKM * 100000
    document.write ("Distance in centimeters: " + distanceCM + "cm")
}
centimeters ()


// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work for fractional part of an hour.
function calculateOvertimePay () {
    var workedHours = +prompt("Enter the number of hours worked")
    var perHourRate = 12
    var regHours = 40
    var overtime = workedHours - regHours
    var overtimePay = overtime * perHourRate
    document.write ("Overtime Pay: " + overtimePay)
}
calculateOvertimePay()


// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
function countNotes () {
    var amountWithdrawn = prompt ("Enter the amount to be withdrawan in 100s")
    var notesOf100 = Math.floor (amountWithdrawn)
    var notesOf50 = Math.floor ((amountWithdrawn * 100) / 50)
    var notesOf10 = Math.floor((amountWithdrawn * 100) % 50 / 10)
    document.write("Number of 100 notes: " + notesOf100 + "<br>");
    document.write("Number of 50 notes: " + notesOf50 + "<br>");
    document.write("Number of 10 notes: " + notesOf10 + "<br>");
}
countNotes ()









