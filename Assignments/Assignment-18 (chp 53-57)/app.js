// 1. Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.
function openModal(image) {
    var modal = document.getElementById('modal')
    var modalImg = document.getElementById('modalImg')
    modal.style.display = 'block'
    modalImg.src = image.src
  }
  function closeModal() {
    var modal = document.getElementById('modal')
    modal.style.display = 'none'
  }


// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-)
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
var fontSize = 16
    function zoomIn() {
      fontSize += 2
      updateFontSize()
    }
    function zoomOut() {
      fontSize -= 2
      updateFontSize()
    }
    function updateFontSize() {
      var zoomParagraph = document.getElementById('zoomParagraph')
      zoomParagraph.style.fontSize = fontSize + 'px'
    }