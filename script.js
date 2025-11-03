// Highlight active sidebar link
const navItems = document.querySelectorAll('.sidebar-links .nav-item');
const currentPage = location.pathname.split("/").pop();

navItems.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Optional: smooth scroll for anchor links (if needed in-page)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
