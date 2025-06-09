document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Contact form validation (only on contact page)
  const form = document.getElementById('contact-form');
  if (form) {
    const submitButton = form.querySelector('button[type="button"]');
    if (submitButton) {
      submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
          alert('Please fill out all fields.');
          return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }

        alert('Message sent successfully!');
        form.reset();
      });
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.remove('show');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Hamburger menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    // Accessibility: toggle aria-expanded
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });

  // Close menu when clicking outside (on mobile)
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    }
  });

  // Prevent nav from closing when clicking inside
  navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
