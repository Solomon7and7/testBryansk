const rules = document.querySelector('.rules');
const prizes = document.querySelector('.prizes');
const winners = document.querySelector('.winners');
const infoBox = document.querySelector('.info-box');
const footer = document.querySelector('.footer');

// при клике на кнопку, плавно прокручиваем страницу
rules.addEventListener('click', e => {
  infoBox.scrollIntoView({block: "center", behavior: "smooth"});
})

prizes.addEventListener('click', e => {
  footer.scrollIntoView({block: "start", behavior: "smooth"});
})

winners.addEventListener('click', e => {
  footer.scrollIntoView({block: "start", behavior: "smooth"});
})