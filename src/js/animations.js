// Scroll Animations, Number Counters, and Bar Chart Triggers

export function initAnimations() {
  // Intersection Observer for Reveal-on-scroll elements
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Intersection Observer for Number Counters
  const counterElements = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => counterObserver.observe(el));

  // Intersection Observer for Demographics Charts
  const chartSection = document.querySelector('.demo-chart-box');
  if (chartSection) {
    const chartObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateDemographics();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    chartObserver.observe(chartSection);
  }
}

function animateCounter(element) {
  const target = parseFloat(element.getAttribute('data-target'));
  const suffix = element.getAttribute('data-suffix') || '';
  const prefix = element.getAttribute('data-prefix') || '';
  const isDecimal = target % 1 !== 0;
  
  let current = 0;
  const duration = 1800;
  const steps = 60;
  const stepTime = duration / steps;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    const formatted = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
    element.textContent = `${prefix}${formatted}${suffix}`;
  }, stepTime);
}

function animateDemographics() {
  // Animate Age Bars
  const ageFills = document.querySelectorAll('.age-bar-fill');
  ageFills.forEach(fill => {
    const width = fill.getAttribute('data-width');
    if (width) {
      fill.style.width = width;
    }
  });

  // Animate Gender Progress
  const femaleFill = document.querySelector('.gender-fill-female');
  const maleFill = document.querySelector('.gender-fill-male');
  if (femaleFill && maleFill) {
    femaleFill.style.width = femaleFill.getAttribute('data-width') || '56%';
    maleFill.style.width = maleFill.getAttribute('data-width') || '44%';
  }
}
