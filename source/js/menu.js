(function() {
  var toggle = document.querySelector('.header__toggle');
  var menu = document.querySelector('.main-nav');

  toggle.classList.remove('header__toggle--nojs');
  menu.classList.remove('main-nav--nojs');
  menu.classList.add('main-nav--close');

  toggle.addEventListener('click', function() {
    if (toggle.classList.contains('header__toggle--open')) {
      toggle.classList.remove('header__toggle--open');
      menu.classList.add('main-nav--close');
    } else {
      toggle.classList.add('header__toggle--open');
      menu.classList.remove('main-nav--close');
    }
  })
})()