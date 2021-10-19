const rules = document.querySelector('.rules');
const prizes = document.querySelector('.prizes');
const winners = document.querySelector('.winners');
const infoBox = document.querySelector('.info-box');
const footer = document.querySelector('.footer');

const author = document.querySelector('.author')
const authorLogin = document.querySelector('.author__login');
const authorReg = document.querySelector('.author__reg');

//Для окна авторизации
const win = document.createElement('div');
const winClose = document.createElement('div');
const winButtonClose = document.createElement('div');

// при клике на кнопку, плавно прокручиваем страницу
rules.addEventListener('click', e => {
  infoBox.scrollIntoView({block: "center", behavior: "smooth"});
});

prizes.addEventListener('click', e => {
  footer.scrollIntoView({block: "start", behavior: "smooth"});
});

winners.addEventListener('click', e => {
  footer.scrollIntoView({block: "start", behavior: "smooth"});
});
  
author.addEventListener('click', createModalWin);

function createModalWin() {
  
  if (document.querySelector('.win') < 1 ) {
    win.classList.add('win');
    winClose.classList.add('win__close');
    winButtonClose.classList.add('win__button-close');
  
    author.append(win);
    win.append(winClose);
    win.append(winButtonClose);

    winClose.addEventListener('click', () => {
      // win.style.display = 'none';
      win.classList.toggle('win');
    })
  } else {
    win.classList.toggle('win');
  }
}
