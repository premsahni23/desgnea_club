(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const message = document.querySelector('#form-message');

  function closeMenu() {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menu.hidden = isOpen;
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  });

  menu.querySelector('a').addEventListener('click', closeMenu);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });

  document.querySelectorAll('.register-action').forEach((button) => {
    button.addEventListener('click', () => {
      const value = window.DESGNEA_CLUB_APPLICATION_FORM_URL;
      let url;
      try { url = new URL(value); } catch { /* Form not connected yet. */ }
      if (url && ['https:', 'http:'].includes(url.protocol)) {
        window.location.assign(url.href);
        return;
      }
      closeMenu();
      message.textContent = 'The application form link has not been added yet.';
      message.hidden = false;
      message.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  });
})();
