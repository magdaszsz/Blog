window.onscroll = function() {
  scrollFunction();
  scroll()
};

  function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector("nav").classList.add('small');
    document.querySelector(".logo").classList.add('smallLogo');
    document.querySelector(".mobile-logo").classList.add('smallLogo');
  }  else {
    document.querySelector("nav").classList.remove('small');
    document.querySelector(".logo").classList.remove('smallLogo');
    document.querySelector(".mobile-logo").classList.remove('smallLogo');

  }
}

/**************** SCROLL BUTTON ****************/

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

/****************** SLIDE IN MENU IN MOBILE ***********/

const toggler = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-list');
toggler.addEventListener('click', function() {
  mobileMenu.classList.toggle('show');
})


/*************** MODAL POP UP ***************/

const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelectorAll('.close');

for(let image of images) {
  image.addEventListener('click', function(e) {
    const source = e.target.src;
    modal.querySelector('img').setAttribute('src', source);
    overlay.classList.add('show');
    modal.classList.add('show');
    
  });
}

overlay.addEventListener('click', function() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
})

for(let x of close) {
  x.addEventListener('click', function() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
  })
}