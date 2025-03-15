
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
          });
      });
  });

  // Form validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple form validation
      const name = form.querySelector('input[placeholder="Your Name"]').value;
      const email = form.querySelector('input[placeholder="Your Email"]').value;
      const message = form.querySelector('textarea[placeholder="Your Message"]').value;

      if (name && email && message) {
          alert('Messaging feature is not available yet yet');
          form.reset();
      } else {
          alert('Please fill in all fields.');
      }
  });

  // IntersectionObserver for fade-in effect
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-visible');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
  });

  // Text scramble effect
  const scrambleText = (element) => {
      const chars = '!<>-_\\/[]{}—=+*^?#________';
      const text = element.innerText;
      let newText = '';
      let i = 0;

      const interval = setInterval(() => {
          if (i < text.length) {
              newText += chars[Math.floor(Math.random() * chars.length)];
              element.innerText = newText;
              i++;
          } else {
              clearInterval(interval);
              element.innerText = text;
          }
      }, 50);
  };

  document.querySelectorAll('.scramble-text').forEach(element => {
      scrambleText(element);
  });

  // Dark/Light mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
  });

  // Parallax scrolling effect
  window.addEventListener('scroll', () => {
      const parallax = document.querySelector('.parallax');
      let scrollPosition = window.pageYOffset;
      parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });

  // Animate skill bars
  const skillBars = document.querySelectorAll('.skill-bar .skill-level');
  skillBars.forEach(skillBar => {
      const width = skillBar.style.width;
      skillBar.style.width = '0';
      skillBar.style.transition = 'width 1s ease-in-out';
      observer.observe(skillBar);
      skillBar.addEventListener('transitionend', () => {
          skillBar.style.width = width;
      });
  });
});


 