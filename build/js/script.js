/* (function () {
  const buttonMenu = document.querySelector('.mobile-menu__button');
  const menuActivate = document.querySelector('.mobile-menu__items');
  const hidden = document.querySelectorAll('.mobile-hidden');
  const itemMenu = document.querySelectorAll('.main-nav__item-content');

  if (buttonMenu && menuActivate) {
    buttonMenu.classList.remove('mobile-menu__button--active');
    menuActivate.classList.remove('mobile-menu__items--active');
    buttonMenu.classList.remove('mobile-menu__button--hidden');

    buttonMenu.addEventListener('click', () => {
      menuActivate.classList.toggle('mobile-menu__items--active');
      buttonMenu.classList.toggle('mobile-menu__button--active');

      if (hidden) {
        hidden.forEach((el) => {
          el.classList.toggle('visually-hidden');
        });
      }
    });

    itemMenu.forEach((item) => {
      item.addEventListener('click', () => {
        if (hidden) {
          hidden.forEach((el) => {
            el.classList.remove('visually-hidden');
          });
        }
        buttonMenu.classList.remove('mobile-menu__button--active');
        menuActivate.classList.remove('mobile-menu__items--active');
      });
    });
  }
})();
 */
