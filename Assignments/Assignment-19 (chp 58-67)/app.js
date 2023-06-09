// 1. Consider you have following code snippet:(Copy it in your HTML file)
// i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById('main-content')

// ii. Display all child elements of “main-content” element.
var childElements = mainContent.children
console.log("Child elements of 'main-content':")
for (var i = 0; i < childElements.length; i++) {
  console.log(childElements[i])
}

// iii. Get all elements of class “render” and show their innerHTML in browser.
var renderElements = document.getElementsByClassName('render')
console.log("innerHTML of elements with class 'render':")
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML)
}

// iv. Fill input value whose element id first-name using javascript.
var firstNameInput = document.getElementById('first-name')
firstNameInput.value = "Alex"

// v. Repeat part iv for id ”last-name” and “email”.
var lastNameInput = document.getElementById('last-name')
lastNameInput.value = "Bank"
var emailInput = document.getElementById('email')
emailInput.value = "alexbank@example.com"

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
var formContent = document.getElementById('form-content')
var formContentType = formContent.nodeType
document.getElementById('result-i').innerHTML = "Node type of element with id 'form-content': " + formContentType

// ii. Show node type of element having id “lastName” and its child node.
var lastNameElement = document.getElementById('lastName')
var lastNameNodeType = lastNameElement.nodeType
var lastNameChildNode = lastNameElement.childNodes[0].nodeType
document.getElementById('result-ii').innerHTML = "Node type of element with id 'lastName': " + lastNameNodeType + "<br>Node type of its child node: " + lastNameChildNode
// iii. Update child node of element having id “lastName”.
lastNameElement.childNodes[0].nodeValue = "Last Name: Updated"

// iv. Get First and last child of id “main-content”.
var mainContentFirstChild = mainContent.firstElementChild
var mainContentLastChild = mainContent.lastElementChild
document.getElementById('result-iv').innerHTML = "First child of 'main-content': " + mainContentFirstChild.innerHTML + "<br>Last child of 'main-content': " + mainContentLastChild.innerHTML

// v. Get next and previous siblings of id “lastName”.
var lastNameElementNextSibling = lastNameElement.nextElementSibling
var lastNameElementPreviousSibling = lastNameElement.previousElementSibling
document.getElementById('result-v').innerHTML = "Next sibling of element with id 'lastName': " + lastNameElementNextSibling.innerHTML + "<br>Previous sibling of element with id 'lastName': " + lastNameElementPreviousSibling.innerHTML

// vi. Get parent node and node type of element having id “email”
var emailElement = document.getElementById('email')
var emailElementParent = emailElement.parentNode
var emailElementNodeType = emailElement.nodeType
document.getElementById('result-vi').innerHTML = "Parent node of element with id 'email': " + emailElementParent.innerHTML + "<br>Node type of element with id 'email': " + emailElementNodeType
