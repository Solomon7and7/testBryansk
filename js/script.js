const rules = document.querySelector('.rules');
const prizes = document.querySelector('.prizes');
const winners = document.querySelector('.winners');
const infoBox = document.querySelector('.info-box');
const footer = document.querySelector('.footer');
const author = document.querySelector('.author');
const authorLogin = document.querySelector('.author__login');
const authorReg = document.querySelector('.author__reg');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuItemBefore = document.querySelector('.burger-menu__item-one');
const burgerMenuItemCenter = document.querySelector('.burger-menu__item-two');
const burgerMenuItemAfter = document.querySelector('.burger-menu__item-three');

//Для окна авторизации
const win = document.createElement('div');
const winClose = document.createElement('div');
const winButtonClose = document.createElement('button');

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
  
authorLogin.addEventListener('click', createModalWin);
authorReg.addEventListener('click', createModalWin);
authorReg.addEventListener('click', e => {
  authorReg.classList.add('active');
});

function createModalWin() {

  if (document.querySelector('.win') < 1 ) {
    win.classList.add('win');
    winClose.classList.add('win__close');
    winButtonClose.classList.add('win__button-close');
    winButtonClose.textContent = 'Закрыть';

    author.append(win);
    win.append(winClose);
    win.append(winButtonClose);

    winClose.addEventListener('click', () => {
      win.style.display = 'none';
      authorReg.classList.remove('active');
    });
    winButtonClose.addEventListener('click', () => {
      win.style.display = 'none';
      authorReg.classList.remove('active');
    });
  } else {
    win.style.display = 'block';
  };
};

burgerMenu.addEventListener('click', createMobileMenu);
burgerMenu.addEventListener('click', rotate);
burgerMenu.addEventListener('click', e => {
  document.querySelector('.mobile-menu').classList.toggle('hidden')
});

function createMobileMenu () {
  while (document.querySelector('.mobile-menu') <1) {
    burgerMenu.insertAdjacentHTML("beforeend", `
      <div class="mobile-menu hidden">
        <nav class = "nav-menu">
          <a class="nav-menu__item rules">Правила</a>
          <a class="nav-menu__item prizes">Призы</a>
          <a class="nav-menu__item winners">Победители</a>
        </nav>
        <div></div>
        <nav class="info-mobile">
          <a class="footer-menu__item footer-menu__connect" href="javascript:;">Обратная связь</a>
          <a class="footer-menu__item footer-menu__rules" href="javascript:;">Правила акции</a>
          <a class="footer-menu__item footer-menu__faq" href="javascript:;">faq</a>
        </nav>
        <div></div>
        <div class="social-mobile">
          <div class="social__title">Присоединяйтесь к нам</div>
          <div class="social-icons"> 
            <div class="social-icon icon__fb"></div>
            <div class="social-icon icon__vc"></div>
            <div class="social-icon icon__link"></div>
            <div class="social-icon icon__tw"></div>
            <div class="social-icon icon__inst"></div>
            <div class="social-icon icon__p"></div>
          </div>
        </div>
      </div>
    `);
  }
}


function rotate () {
  burgerMenuItemCenter.classList.toggle('burger-menu__item-center');
  burgerMenuItemBefore.classList.toggle('burger-menu__item-before');
  burgerMenuItemAfter.classList.toggle('burger-menu__item-after');
}
