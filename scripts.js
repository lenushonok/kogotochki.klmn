// слайдшоу общее
let slideIndex1 = 0;
let slideIndex2 = 0;
showSlides("mySlides", slideIndex1);
showSlides("mySlides2", slideIndex2);
function showSlides(value, slideIndex) {
  let i = 0;
  let slides = document.getElementsByClassName(value);
  
  for (i; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000, value, slideIndex);
}

// Открытие спойлеров по нажатию из навигации
function openSpoiler(value) {
  spoiler = document.getElementById('spoiler' + value);
  spoiler.open = true;
  spoilerHeader = document.getElementById('header' + value);
  spoilerHeader.style.color = '#901456';
  spoilerHeader.style.fontSize = '20px';
  setTimeout(returnColor, 1000, spoilerHeader);
}

function returnColor(value) {
  value.style.color = 'black';
  value.style.fontSize = '16px';
}

// кнопка вверх
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#topNubex').fadeIn();
    } else {
      $('#topNubex').fadeOut();
    }
  });
  $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});

function openBurger() {
  let nav = document.querySelector('nav');
  let burgerContent = document.getElementsByClassName('burger_content');
  let header = document.querySelector('header');
  nav.classList.toggle('show');
  burgerContent[0].classList.toggle('show');
  burgerContent[1].classList.toggle('show');
  header.classList.toggle('show');
}