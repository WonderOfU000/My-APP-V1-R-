// scripts.js

// Filter Portfolio Items
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    portfolioItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Show Project Details
const projectDetailsSection = document.getElementById('project-details');
const detailsContent = document.querySelector('.details-content');
const closeDetailsBtn = document.getElementById('close-details');

document.querySelectorAll('.portfolio-item .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const project = btn.dataset.project;
    // Example details for each project (you can customize these)
    const projectDetails = {
      project1: {
        title: 'Type Writer',
        description: 'Typing detection web application that tracks and displays the user\'s typing speed and accuracy in real-time.',
        link: '#'
      },
      project2: {
        title: 'Personal Website',
        description: 'Personal website showcasing my skills with a clean and simple layout.',
        link: '#'
      },
      project3: {
        title: '2D Game',
        description: 'A space-themed action game showcasing my skills in game development.',
        link: '#'
      }
    };
    const details = projectDetails[project];
    detailsContent.innerHTML = `<h3>${details.title}</h3><p>${details.description}</p><a href="${details.link}" class="btn">View Live</a>`;
    projectDetailsSection.style.display = 'block';
  });
});

// Close Project Details
closeDetailsBtn.addEventListener('click', () => {
  projectDetailsSection.style.display = 'none';
});

// Smooth Scroll for Service Buttons
document.querySelectorAll('.service-item .btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Animation
const portfolioItemsScroll = document.querySelectorAll('.portfolio-item');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  portfolioItemsScroll.forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
  });
}


// Back to Top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});



// Modal Functionality
const modalBtns = document.querySelectorAll('.portfolio-item .btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modal;
    document.getElementById(modalId).style.display = 'flex';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});


// Fade-in effect
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Animated skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar-inner');
    skillBars.forEach(bar => {
      const width = bar.closest('.skill-item').dataset.skillLevel;
      bar.style.width = `${width}%`;
    });
  });
  

// Accessibility Enhancements
document.querySelectorAll('a').forEach(anchor => {
    anchor.setAttribute('tabindex', '0');
    anchor.setAttribute('role', 'link');
});

// Smooth Scroll for Service Buttons
document.querySelectorAll('.service-item .btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

// Contact Form Validation (Example)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Example validation logic
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;
    if (name && email && message) {
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
