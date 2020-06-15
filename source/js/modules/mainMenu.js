//variables for interaction menu styles
var mainNav = document.querySelector('.header');
var introMove = document.querySelector('.intro');
var pageMain = document.querySelector('.page');
var mainIntro = document.querySelector('.page__main');

//variables for interaction with menu button (close/open)
// eslint-disable-next-line no-unused-vars
var menuToggle = document.querySelector('.menu__toggle');
var menuSecondToggle = document.querySelector('.menu__toggle-second');

//disable nojs styles on default
mainNav.classList.remove('header--nojs', 'header__second--nojs');
mainIntro.classList.remove('page__main--nojs');

menuToggle.addEventListener('click', function () {
  if (pageMain.classList.contains('page--main')) {
    if (menuToggle.classList.contains('menu__toggle--closed')) {
      menuToggle.classList.remove('menu__toggle--closed');
      menuToggle.classList.add('menu__toggle--opened');
      mainNav.classList.remove('header--open');
      introMove.classList.remove('intro--opened');
    } else {
      menuToggle.classList.remove('menu__toggle--opened');
      menuToggle.classList.add('menu__toggle--closed');
      mainNav.classList.add('header--open');
      introMove.classList.add('intro--opened');
    }
  } else {
    if (menuSecondToggle.classList.contains('menu__toggle--closed')) {
      menuSecondToggle.classList.remove('menu__toggle--closed');
      menuSecondToggle.classList.add('menu__toggle--opened');
      mainNav.classList.remove('header__second--open');
    } else {
      menuSecondToggle.classList.remove('menu__toggle--opened');
      menuSecondToggle.classList.add('menu__toggle--closed');
      mainNav.classList.add('header__second--open');
    }
  }
});
