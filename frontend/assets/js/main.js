/* ═══════════════════════════════════════════════════
   CASABLANCA — main.js
   Global JS: Cursor · Navbar · Magnetic · Lenis
═══════════════════════════════════════════════════ */

'use strict';

const API_BASE = '/api';

/* ─── Cursor ─────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  });

  (function lerp() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerp);
  })();

  // Hover states
  const interactives = 'a, button, [data-magnetic], input, select, textarea, label';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactives)) {
      dot.style.transform = 'translate(-50%,-50%) scale(2)';
      dot.style.background = '#fff';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactives)) {
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      dot.style.background = 'var(--gold)';
    }
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();

/* ─── Magnetic Buttons ───────────────────────────── */
function initMagnetic() {
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

/* ─── Navbar Scroll ──────────────────────────────── */
function initNavbar() {
  const nav    = document.getElementById('navbar');
  const burger = document.getElementById('nav-burger');
  const links  = document.getElementById('nav-links');
  if (!nav) return;

  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 60);
    // Hide on scroll down, show on scroll up
    if (y > lastY + 5 && y > 200) {
      nav.style.transform = 'translateY(-100%)';
    } else if (y < lastY - 5) {
      nav.style.transform = 'translateY(0)';
    }
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Burger
  if (burger && links) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });
    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth transition for navbar
  nav.style.transition = 'transform .4s var(--ease-expo), background .5s ease, backdrop-filter .5s ease, box-shadow .5s ease';
}

/* ─── GSAP ScrollTrigger Reveals ─────────────────── */
function initReveal() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Generic reveals
  gsap.utils.toArray('.reveal-up').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    });
  });

  gsap.utils.toArray('.reveal-scale').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    });
  });

  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });

  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });
}

/* ─── Counter Animation ──────────────────────────── */
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const isLarge = target >= 1000;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        let start = 0;
        const duration = 1800;
        const step = timestamp => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.floor(eased * target);
          if (isLarge) {
            el.textContent = value.toLocaleString('fa-IR');
          } else {
            el.textContent = value.toLocaleString('fa-IR');
          }
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString('fa-IR');
        };
        requestAnimationFrame(step);
      }
    });
  });
}

/* ─── Marquee (GSAP) ─────────────────────────────── */
function initMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track || typeof gsap === 'undefined') return;
  const clone = track.cloneNode(true);
  track.parentNode.appendChild(clone);
  const totalWidth = track.scrollWidth;
  gsap.set([track, clone], { x: i => i === 0 ? 0 : totalWidth });
  gsap.to([track, clone], {
    x: `-=${totalWidth}`,
    duration: 30,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
    }
  });
}

/* ─── Reservation Form ───────────────────────────── */
function initForm() {
  const form = document.getElementById('reservation-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('form-success');
    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.querySelector('span').textContent = 'در حال ثبت...';
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.querySelector('span').textContent = 'ثبت رزرو';
      if (success) {
        success.classList.remove('hidden');
        setTimeout(() => success.classList.add('hidden'), 5000);
      }
    }, 1200);
  });
}

/* ─── Init ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMagnetic();
  initForm();
});

window.addEventListener('load', () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    initReveal();
    initCounters();
    initMarquee();
  }
});
