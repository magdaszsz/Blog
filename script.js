


window.onscroll = function() {
    
  scrollFunction();
  scroll()};

  

  function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".top").style.height = "10vh";
    document.querySelector(".top").style.fontSize = "15px";
    document.querySelector("#logo").style.fontSize = "20px";


}  else {
    document.querySelector(".top").style.height = "15vh";
    document.querySelector(".top").style.fontSize = "20px";
    document.querySelector("#logo").style.fontSize = "35px";
}}

mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button


function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

