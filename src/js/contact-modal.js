// Interactive Contact Modal & Collab Proposal Handler

export function initContactModal() {
  const contactModal = document.getElementById('contact-modal');
  const videoModal = document.getElementById('video-modal');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  // Trigger buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-modal="contact"]');
    if (trigger) {
      e.preventDefault();
      if (contactModal) contactModal.classList.add('active');
    }
  });

  // Close modals
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (contactModal) contactModal.classList.remove('active');
      if (videoModal) videoModal.classList.remove('active');
    });
  });

  // Close modal on background overlay click
  [contactModal, videoModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });

  // Handle Contact Form Submit
  const form = document.getElementById('collab-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `SENDING... <i data-lucide="loader-2" class="spin"></i>`;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (contactModal) contactModal.classList.remove('active');
        form.reset();

        showToast("Collaboration request sent successfully! Amazing will get back to you shortly.");
      }, 1200);
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: var(--text-primary);
      color: #FFFFFF;
      padding: 1rem 1.5rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      font-weight: 700;
      font-size: 0.9rem;
      z-index: 3000;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border-left: 4px solid var(--accent-color);
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check-circle-2" style="color:var(--accent-color);"></i> ${message}`;
  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 4000);
}
