// 1. Write a program that displays current date and time in your browser.
var currentDate = new Date()
var date = currentDate.toDateString()
var time = currentDate.toLocaleTimeString()
var timeZone = "PKT"
document.write (date + " " + time + " GMT" + currentDate.getTimezoneOffset() / -60 + "00 " + "(" + timeZone + ")" + "<br>")


// 2. Write a program that alerts the current month in words. For example December.
var currentDate1 = new Date ()
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = currentDate1.getMonth()
var currentMonth  = monthName[month]
alert ("Current Month: " + currentMonth)


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var currentDate2 = new Date()
var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var day = currentDate2.getDay()
var today = dayName[day]
var final = today.slice(0,3)
alert ("Today is " + final)


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var currentDate3 = new Date()
var dayName1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var day1 = currentDate3.getDay()
var today1 = dayName1[day1]
if (today1 === "Saturday" || today1 === "Sunday" ) {
document.write ("It's Fun day."+ "<br>")
}
else {
console.log ("It's a working day."+ "<br>")
}


// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else
// shows “Last days of the month”.
var currentDatee = new Date()
var date2 = currentDatee.getDate()
if (date2 < 16) {
    document.write ("First fifteen days of the month." + "<br>")
}
else {
    document.write ("Last days of the month." + "<br>")
}


// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared 
// beforehand. Use any variable you like to represent the Date object.
var currentDate4 = new Date ()
var date3 = currentDate4.toDateString()
var time3 = currentDate4.toLocaleTimeString()
var timeZone3 = "PKT"
var elapsedMSecs = currentDate4.getTime()
var elapsedMins = elapsedMSecs / (1000 * 60) //  1000 milliseconds in a second and 60 seconds in a minute
document.write ("Current Date: " + date3 + " " + time3 + " GMT" + currentDate4.getTimezoneOffset() / -60 + "00 " + "(" + timeZone3 + ")" + "<br>")
document.write ("Elapsed Milliseconds: " + elapsedMSecs + "<br>")
document.write ("Elapsed Minutes: " + elapsedMins + "<br>")


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var currentDate5 = new Date ()
var time5 = currentDate5.getHours()
var isAM = time5 < 12
if (isAM) {
   alert ("Its AM.")
}
else {
    alert ("It's PM.")
}


// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
var laterDate = new Date (2022, 11, 31)
document.write ("Later Date: " + laterDate + "<br>")


// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var currentDate6  = new Date ()
var starting = new Date (2015, 5, 18)
var difference = currentDate6.getTime() - starting.getTime()
var passedDays = Math.floor (difference / (1000 * 60 * 60 * 24))    // number of milliseconds in a day: 1000 milliseconds * 60 seconds * 60 minutes * 24 hours
alert (passedDays + " Days have passed since 1st Ramadan, 2015")


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
var referenceDate = new Date (2023, 5, 8)
var beg2015 = new Date (2015, 0, 1)
var diff = referenceDate.getTime() - beg2015.getTime()
var result = Math.floor(diff/1000)
document.write ("On reference date: " + referenceDate + " " + result + " seconds had passed since beginning of 2015." + "<br>")


// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display
// // the date object in your browser.
var currentDate7 = new Date ()
var hours7 = currentDate7.getHours()
alert ("Current Date: " + currentDate7);
currentDate.setHours(hours7 + 1)
alert ("Updated Date: " + currentDate7)


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var currentDate8 = new Date ()
currentDate8.setFullYear(currentDate8.getFullYear() - 100)
var message1 = "Current Date: " + currentDate8 + "<br>";
message1 += "100 Years back it was: " + currentDate;
alert(message1)


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var userAge1 = prompt("Enter your age")
var currentYear3 = new Date().getFullYear()
var birthYear3 = currentYear3 - userAge1
document.write ("Your age is: " + userAge1 + "<br>")
document.write ("Your birth year is: " + birthYear3 + "<br>")


// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.
// Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable 
// (after Due Date) = Net Amount + Late Payment Surcharge
var customerName = prompt("Enter Customer Name")
var currentMonth22 = prompt("Enter Month Name")
var units = +prompt("Enter Units Consumed")
var chargesPerUnit = +prompt("Enter Charges per Unit")
var surcharge = +prompt ("Enter Late Payment Surcharge")
var netAmountPayable = units * chargesPerUnit
var grossAmountPayable = netAmountPayable + surcharge
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth22 + "<br>");
document.write("Number of Units: " + units.toFixed(2) + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + surcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "<br>");
