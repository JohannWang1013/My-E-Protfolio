// Simple tab switcher
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  function showSection(id) {
    sections.forEach(s => s.style.display = (s.id === id ? 'block' : 'none'));
    links.forEach(l => {
      if (l.dataset.target === id) l.classList.add('active');
      else l.classList.remove('active');
    });
    // scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      showSection(target);
    });
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  menuBtn.addEventListener('click', () => {
    if (nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // default visible
  showSection('home');
});
