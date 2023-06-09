// 1. Show an alert box on click on a link.
function  alertbox () {
    alert ("You clicked on this link")
}


// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
function  alertBox () {
    alert ("Thanks for purcasing mobile from us.")
}


// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button 
// to delete a record, entire row should be deleted.Before delete After click on delete button on “Mark ” row
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
// solved in index.html file 


// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser.
var counter = 0;

    function updateCounter() {
      document.getElementById('counterValue').innerText = counter;
}
    function increaseCounter() {
      counter++;
      updateCounter();
}
    function decreaseCounter() {
      if (counter > 0) {
        counter--;
        updateCounter();
    }
}
