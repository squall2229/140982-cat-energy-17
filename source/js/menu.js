(function() {
  var toggle = document.querySelector('.header__toggle');
  var menu = document.querySelector('.main-nav');

  toggle.classList.remove('header__toggle--nojs');
  menu.classList.remove('main-nav--nojs');
  menu.classList.add('main-nav--close');

  toggle.addEventListener('click', function() {
    var isToggleOpen = toggle.classList.contains('header__toggle--open')

    toggle.classList.toggle('header__toggle--open', !isToggleOpen);
    menu.classList.toggle('main-nav--close', isToggleOpen);
  })
})()
