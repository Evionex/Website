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
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Handle mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        document.body.classList.toggle('dropdown-open');
    });

    // Handle services dropdown
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show');
            document.body.classList.remove('dropdown-open');
        }
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Prevent dropdown scroll from propagating to body
    dropdownMenu.addEventListener('wheel', (e) => {
        e.stopPropagation();
    });
});
