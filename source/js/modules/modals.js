//modal windows for registration fail/success
var failBtn = document.querySelector('.button__alert--failure');
var failModal = document.querySelector('.modal__alert--failure');
var succBtn = document.querySelector('.button__alert--success');
var succModal = document.querySelector('.modal__alert--success');

//form
var singUp = document.querySelector('.form__sing-up');
var userSurname = document.querySelector('[name=surname]');
var userName = document.querySelector('[name=name]');
var userMail = document.querySelector('[name=email]');

//close modal windows
failBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  failModal.classList.remove('modal__alert--show');
});

succBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  succModal.classList.remove('modal__alert--show');
});

//form submition
//
singUp.addEventListener('submit', function (evt) {
  if (!userSurname.value || !userName.value || !userMail.value) {
    evt.preventDefault();
    failModal.classList.add('modal__alert--show');
  } else {
    evt.preventDefault();
    succModal.classList.add('modal__alert--show');
  }
});
