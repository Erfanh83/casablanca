/* ═══════════════════════════════════════════════════
   CASABLANCA — home.js
   Loader · Hero animations · Parallax
═══════════════════════════════════════════════════ */

'use strict';

/* ─── Page Loader ────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById('page-loader');
  const bar    = document.getElementById('loader-bar');
  const logo   = loader?.querySelector('.loader-logo');
  if (!loader) return;

  let progress = 0;

  function animateLogo() {
    if (typeof gsap === 'undefined') return;
    gsap.to(logo, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
  }

  function fillBar() {
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 90) { clearInterval(interval); progress = 90; }
      if (bar) bar.style.width = progress + '%';
    }, 80);
    return interval;
  }

  animateLogo();
  const interval = fillBar();

  window.addEventListener('load', () => {
    clearInterval(interval);
    if (bar) bar.style.width = '100%';

    setTimeout(() => {
      if (typeof gsap === 'undefined') {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 600);
        revealHero();
        return;
      }
      gsap.to(loader, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.3,
        onComplete: () => {
          loader.remove();
          revealHero();
        }
      });
    }, 600);
  });
})();

/* ─── Hero Reveal ────────────────────────────────── */
function revealHero() {
  if (typeof gsap === 'undefined') {
    // Fallback without GSAP
    document.querySelectorAll('.hero-word, .hero-label, .hero-tagline, .hero-actions, .hero-scroll-hint')
      .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    return;
  }

  const tl = gsap.timeline();

  // Words fly in from bottom
  tl.to('.hero-word', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.12,
    ease: 'power4.out',
  })
  .to('.hero-label', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.7')
  .to('.hero-tagline', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.5')
  .to('.hero-actions', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.4')
  .to('.hero-scroll-hint', {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.2');
}

/* ─── Hero Parallax ──────────────────────────────── */
(function initParallax() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    video.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
  }, { passive: true });
})();

/* ─── Gallery Hover 3D Tilt ──────────────────────── */
(function initGalleryTilt() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mousemove', e => {
      const rect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      item.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
    });
  });
})();

/* ─── Menu Cards Parallax ────────────────────────── */
(function initCardParallax() {
  const cards = document.querySelectorAll('.menu-choice-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      const bg = card.querySelector('.card-bg img');
      if (bg) bg.style.transform = `scale(1.1) translate(${x * -12}px, ${y * -12}px)`;
    });
    card.addEventListener('mouseleave', () => {
      const bg = card.querySelector('.card-bg img');
      if (bg) bg.style.transform = '';
    });
  });
})();

/* ─── GSAP Horizontal Scroll (Gallery) ──────────── */
// Only on desktop
if (window.innerWidth > 1024 && typeof gsap !== 'undefined') {
  window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Section label fade-in with color shift
    gsap.utils.toArray('.section-label').forEach(el => {
      gsap.from(el, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      });
    });

    // Ambient parallax for story images
    gsap.utils.toArray('.story-img-main img').forEach(img => {
      gsap.to(img, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });
    });

    // Ambiance image parallax
    const ambiImg = document.querySelector('.ambiance-img-wrap img');
    if (ambiImg) {
      gsap.to(ambiImg, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: ambiImg,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });
    }
  });
}
