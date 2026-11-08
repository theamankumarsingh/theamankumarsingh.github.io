document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .nav-brand');
  const sections = [];

  navLinks.forEach(link => {
    let id = '';
    if (link.classList.contains('nav-brand')) {
      id = 'home';
    } else {
      id = link.getAttribute('href').substring(1);
    }

    const section = document.getElementById(id);
    if (section) {
      sections.push(section);
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('nav-active');
          
          if (link.classList.contains('nav-brand') && id === 'home') {
            link.classList.add('nav-active');
          } else if (!link.classList.contains('nav-brand') && link.getAttribute('href') === `#${id}`) {
            link.classList.add('nav-active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
});

fetch("https://theamankumarsingh.goatcounter.com/counter/TOTAL.json")
  .then(r => r.json())
  .then(d => { document.getElementById("total-views").textContent = d.count; })
  .catch(() => {});
