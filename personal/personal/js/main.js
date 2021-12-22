//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// When click on the submit button, clear the form and show alert for 4 seconds
function formAlert() {
     var inputs = document.querySelectorAll('.contact-item'); // select Inputs
     inputs.forEach(input =>  input.value = ''); // values = empty
     document.getElementById("successForm").style.display = "block" // show alert
     setTimeout("document.getElementById('successForm').style.display = 'none'", 4000); // hide alert with delay
}