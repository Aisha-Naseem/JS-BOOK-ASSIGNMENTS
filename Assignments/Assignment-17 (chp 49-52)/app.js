// 1. Create a signup form and display form data in your web
// page on submission.
function handleSubmit(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    document.getElementById('formData').innerText = "First Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email;
  }


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.
function toggleDetails(button) {
    var item = button.parentNode;
    var fullDetails = item.getElementsByClassName('full-details')[0];
    fullDetails.style.display = fullDetails.style.display === 'none' ? 'block' : 'none';
  }
