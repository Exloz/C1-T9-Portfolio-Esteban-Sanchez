document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const headerList = document.getElementById('header__list');

  menuToggle!.addEventListener('click', () => {
    if (headerList!.classList.contains('menu-hidden')) {
      headerList!.classList.remove('menu-hidden');
      headerList!.classList.add('menu-visible');
    } else {
      headerList!.classList.remove('menu-visible');
      headerList!.classList.add('menu-hidden');
    }
  });
});
