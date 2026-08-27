// Portfolio Category Filter & Lightbox Preview Modal

import { creatorConfig } from '../data/site-config.js';

export function initPortfolio() {
  const container = document.getElementById('portfolio-grid');
  const filterTabs = document.querySelectorAll('.filter-tab');

  if (!container) return;

  renderPortfolioItems(creatorConfig.portfolioItems, 'all');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-filter');
      renderPortfolioItems(creatorConfig.portfolioItems, filterCategory);
    });
  });

  // Global delegate click for portfolio item video lightbox
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.portfolio-card');
    if (card) {
      const itemId = card.getAttribute('data-id');
      const item = creatorConfig.portfolioItems.find(p => p.id === itemId);
      if (item) {
        openVideoModal(item);
      }
    }
  });
}

function renderPortfolioItems(items, filter) {
  const container = document.getElementById('portfolio-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  container.innerHTML = filtered.map(item => `
    <div class="portfolio-card reveal-on-scroll active" data-id="${item.id}" data-category="${item.category}">
      <img src="${item.thumbnail}" alt="${item.title}" class="portfolio-thumb" loading="lazy" />
      <div class="portfolio-overlay">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="badge-tag" style="background:rgba(255,255,255,0.25); color:#fff; border:none; backdrop-filter:blur(4px);">
            ${item.categoryName}
          </span>
          <span style="font-weight:700; font-size:0.85rem; background:rgba(0,0,0,0.5); padding:0.25rem 0.6rem; border-radius:12px;">
            ${item.platform}
          </span>
        </div>

        <div class="portfolio-play-btn">
          <i data-lucide="play" style="width:24px; height:24px; fill:currentColor;"></i>
        </div>

        <div>
          <h4 style="color:#FFFFFF; font-size:1.05rem; margin-bottom:0.4rem; text-shadow:0 2px 8px rgba(0,0,0,0.6);">
            ${item.title}
          </h4>
          <div style="display:flex; gap:1rem; font-size:0.85rem; font-weight:700; opacity:0.9;">
            <span><i data-lucide="eye" style="width:14px; height:14px; display:inline-block; vertical-align:-2px;"></i> ${item.views} views</span>
            <span><i data-lucide="heart" style="width:14px; height:14px; display:inline-block; vertical-align:-2px;"></i> ${item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function openVideoModal(item) {
  const modal = document.getElementById('video-modal');
  const modalBody = document.getElementById('video-modal-body');

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="text-align:center; margin-bottom:1.5rem;">
      <span class="badge-tag" style="margin-bottom:0.5rem;">${item.categoryName} • ${item.platform}</span>
      <h3 style="margin-top:0.25rem;">${item.title}</h3>
    </div>

    <div style="position:relative; aspect-ratio:9/16; max-width:340px; margin:0 auto 1.5rem; border-radius:20px; overflow:hidden; box-shadow:var(--shadow-lg);">
      <img src="${item.thumbnail}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;" />
      <div style="position:absolute; inset:0; background:rgba(0,0,0,0.3); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem; color:#fff; text-align:center; padding:1.5rem;">
        <div style="width:64px; height:64px; border-radius:50%; background:var(--accent-color); display:flex; align-items:center; justify-content:center; box-shadow:0 8px 24px rgba(255,59,96,0.5);">
          <i data-lucide="play" style="width:28px; height:28px; fill:#fff;"></i>
        </div>
        <p style="color:#fff; font-weight:700; font-size:0.95rem;">Watch original post on ${item.platform}</p>
      </div>
    </div>

    <p style="text-align:center; color:var(--text-secondary); font-size:0.95rem; margin-bottom:1.5rem;">
      ${item.description}
    </p>

    <div style="display:flex; justify-content:center; gap:1rem;">
      <a href="${item.videoUrl}" target="_blank" rel="noopener" class="btn btn-primary">
        OPEN ON ${item.platform.toUpperCase()} <i data-lucide="external-link" style="width:16px; height:16px;"></i>
      </a>
    </div>
  `;

  modal.classList.add('active');
  if (window.lucide) window.lucide.createIcons();
}
