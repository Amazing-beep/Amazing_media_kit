// Main Application Entry Point
import { creatorConfig } from '../data/site-config.js';
import { initAnimations } from './animations.js';
import { initContactModal } from './contact-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderSocialStats();
  renderPerformanceMetrics();
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

/**
 * Dynamically binds social statistics from creatorConfig to the DOM.
 * Ensures that updating site-config.js will immediately reflect on the website.
 */
function renderSocialStats() {
  const { tiktok, instagram, facebook, combined } = creatorConfig.socialStats;

  // 1. Hero stats row
  const heroStatsRow = document.getElementById('hero-stats-row');
  if (heroStatsRow) {
    heroStatsRow.innerHTML = `
      <a href="${tiktok.url}" target="_blank" rel="noopener">
        <strong>${tiktok.count}</strong> TikTok
      </a>
      <span style="opacity:0.3">•</span>
      <a href="${instagram.url}" target="_blank" rel="noopener">
        <strong>${instagram.count}</strong> Instagram
      </a>
      <span style="opacity:0.3">•</span>
      <span><strong>${facebook.count}</strong> Facebook</span>
    `;
  }

  // 2. Hero Floating Community Badge
  const heroCommunityBadge = document.getElementById('hero-community-badge');
  if (heroCommunityBadge) {
    const textEl = heroCommunityBadge.querySelector('span');
    if (textEl) {
      textEl.textContent = combined.badgeText || `${combined.count} COMMUNITY`;
    }
  }

  // 3. Community Stats Cards
  const communityCards = document.querySelectorAll('.community-stats-grid .stat-card');
  if (communityCards.length >= 4) {
    const statsList = [tiktok, instagram, facebook, combined];
    communityCards.forEach((card, index) => {
      const data = statsList[index];
      if (!data) return;

      const numEl = card.querySelector('.stat-number');
      if (numEl) {
        numEl.setAttribute('data-target', data.counterTarget ?? (data.raw / 1000));
        numEl.setAttribute('data-suffix', data.counterSuffix || 'K');
      }

      const labelEl = card.querySelector('.stat-label');
      if (labelEl) {
        labelEl.textContent = data.label;
      }
    });
  }
}

/**
 * Dynamically renders demographics data from creatorConfig.
 */
function renderDemographics() {
  const { demographics } = creatorConfig;

  // Render Gender Split
  const femaleFill = document.querySelector('.gender-fill-female');
  const maleFill = document.querySelector('.gender-fill-male');
  const femaleLabel = document.getElementById('gender-label-female');
  const maleLabel = document.getElementById('gender-label-male');

  const femaleData = demographics.gender?.find(g => g.label.toLowerCase() === 'female') || { percentage: 56, label: 'Female' };
  const maleData = demographics.gender?.find(g => g.label.toLowerCase() === 'male') || { percentage: 44, label: 'Male' };

  if (femaleFill) femaleFill.setAttribute('data-width', `${femaleData.percentage}%`);
  if (maleFill) maleFill.setAttribute('data-width', `${maleData.percentage}%`);
  if (femaleLabel) femaleLabel.textContent = `${femaleData.percentage}% ${femaleData.label}`;
  if (maleLabel) maleLabel.textContent = `${maleData.percentage}% ${maleData.label}`;

  // Render Key Highlight
  const keyHighlightEl = document.getElementById('key-highlight-text');
  if (keyHighlightEl && demographics.keyHighlight) {
    keyHighlightEl.textContent = demographics.keyHighlight.toUpperCase();
  }

  // Render Locations
  const locationContainer = document.getElementById('locations-container');
  if (locationContainer && demographics.locations) {
    locationContainer.innerHTML = demographics.locations.map(loc => `
      <div class="location-chip ${loc.isPrimary ? 'primary-location' : ''}">
        <span>${loc.flag}</span>
        <span>${loc.country}</span>
        ${loc.percentage != null ? `<span style="font-size:0.85rem; font-weight:700; opacity:0.85; margin-left:0.25rem;">${loc.percentage}%</span>` : ''}
      </div>
    `).join('');
  }

  // Render Age Bars
  const ageContainer = document.getElementById('age-bars-container');
  if (ageContainer && demographics.ageBreakdown) {
    ageContainer.innerHTML = demographics.ageBreakdown.map(item => `
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

/**
 * Dynamically renders verified performance metrics from creatorConfig.performanceMetrics
 */
function renderPerformanceMetrics() {
  const perf = creatorConfig.performanceMetrics;
  if (!perf) return;

  const container = document.getElementById('performance-stats-grid');
  if (!container) return;

  const metrics = [perf.impressions, perf.engagementRate, perf.monthlyReach, perf.profileViews];
  const cards = container.querySelectorAll('.stat-card');
  if (cards.length >= 4) {
    cards.forEach((card, i) => {
      const data = metrics[i];
      if (!data) return;

      const numEl = card.querySelector('.stat-number');
      if (numEl) {
        numEl.setAttribute('data-target', data.counterTarget);
        numEl.setAttribute('data-suffix', data.counterSuffix);
      }
      const labelEl = card.querySelector('.stat-label');
      if (labelEl) labelEl.textContent = data.label;
      const subEl = card.querySelector('p');
      if (subEl) subEl.textContent = data.subtext;
    });
  }
}

function renderBrandFits() {
  const container = document.getElementById('brand-fit-cloud');
  if (container && creatorConfig.brandFits) {
    container.innerHTML = creatorConfig.brandFits.map(fit => `
      <div class="brand-fit-tag">${fit}</div>
    `).join('');
  }
}
