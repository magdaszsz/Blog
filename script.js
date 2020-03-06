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

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0; 
}

const images = document.querySelectorAll('.image');
images.forEach((el) => {
  el.addEventListener('click', function(e){
  e.target.classList.toggle('active');
  document.addEventListener('click', function(e) {
  if(el != e.target) {
    el.classList.remove('active');
  }
});
})
});

