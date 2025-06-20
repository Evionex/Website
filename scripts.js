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

// Hero Slider Logic
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider-slide');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const indicators = document.querySelectorAll('.slider-indicator');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.zIndex = i === index ? '10' : '0';
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Add click handlers for indicators
  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  // Optional: auto-advance
  // let interval = setInterval(nextSlide, 7000);

  // Initialize
  showSlide(0);
});


// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
});

// Add smooth hover effect to all interactive elements
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.transition = 'all 0.3s ease';
  });
});

// Optional: Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector('.hero-image');
  if (heroSection) {
    heroSection.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Add the animate-on-scroll class to sections you want to animate
document.querySelectorAll('section').forEach(section => {
  section.classList.add('animate-on-scroll');
});