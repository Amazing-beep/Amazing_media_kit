// Main Application Entry Point

import { creatorConfig } from '../data/site-config.js';
import { initAnimations } from './animations.js';
import { initContactModal } from './contact-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderDemographics();
  renderBrandFits();
  initAnimations();
  initContactModal();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');

  // Sticky navbar shrink on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

function renderDemographics() {
  // Render Locations
  const locationContainer = document.getElementById('locations-container');
  if (locationContainer) {
    locationContainer.innerHTML = creatorConfig.demographics.locations.map(loc => `
      <div class="location-chip ${loc.isPrimary ? 'primary-location' : ''}">
        <span>${loc.flag}</span>
        <span>${loc.country}</span>
      </div>
    `).join('');
  }

  // Render Age Bars
  const ageContainer = document.getElementById('age-bars-container');
  if (ageContainer) {
    ageContainer.innerHTML = creatorConfig.demographics.ageBreakdown.map(item => `
      <div class="age-bar-item">
        <div class="age-bar-header">
          <span>${item.range}</span>
          <span style="color:${item.isPrimary ? 'var(--accent-color)' : 'inherit'}">${item.percentage}%</span>
        </div>
        <div class="age-bar-track">
          <div class="age-bar-fill ${item.isPrimary ? 'highlight' : ''}" data-width="${item.percentage}%"></div>
        </div>
      </div>
    `).join('');
  }
}

function renderBrandFits() {
  const container = document.getElementById('brand-fit-cloud');
  if (container) {
    container.innerHTML = creatorConfig.brandFits.map(fit => `
      <div class="brand-fit-tag">${fit}</div>
    `).join('');
  }
}
