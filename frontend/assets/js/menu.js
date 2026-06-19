/* ═══════════════════════════════════════════════════
   CASABLANCA — menu.js
   Menu page: Fetch API → Offline JSON fallback
   Used by both cafe-menu.html & restaurant-menu.html
═══════════════════════════════════════════════════ */

'use strict';

const MENU_TYPE  = window.MENU_TYPE  || 'cafe';
const API_BASE   = window.API_BASE   || 'http://127.0.0.1:8000/api';
const JSON_PATHS = {
  cafe:       'assets/data/cafe.json',
  restaurant: 'assets/data/restaurant.json',
};

let allData = [];    // [{category_fa, category_en, items:[...]}]
let filtered = [];

/* ─── Bootstrap ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar && initNavbar();
  initMagnetic && initMagnetic();
  loadMenu();
  initSearch();
  initModal();
  initBackToTop();
});

/* ─── Load Menu Data ─────────────────────────────── */
async function loadMenu() {
  showLoading(true);
  try {
    const res = await fetch(`${API_BASE}/menu/${MENU_TYPE}/`, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    allData = normalizeApiData(data);
  } catch (err) {
    console.warn('[Casablanca] API unreachable, loading from JSON file:', err.message);
    try {
      const res  = await fetch(JSON_PATHS[MENU_TYPE]);
      allData = await res.json();
    } catch (e2) {
      showError();
      return;
    }
  }
  filtered = allData;
  buildCategoryNav(allData);
  renderCategories(allData);
  showLoading(false);
  initScrollSpy();
}
window.loadMenu = loadMenu;

/* ─── Normalize API response → local format ─────── */
function normalizeApiData(data) {
  return data.map(cat => ({
    id: cat.id,
    category_fa: cat.name_fa,
    category_en: cat.name_en,
    items: (cat.items || []).map(item => ({
      id: item.id,
      name_fa: item.name_fa,
      name_en: item.name_en,
      description: item.description || '',
      price: item.price,
      image: item.image_url || '',
      is_new: item.is_new || false,
      is_special: item.is_special || false,
    }))
  }));
}

/* ─── Category Nav ───────────────────────────────── */
function buildCategoryNav(data) {
  const inner = document.getElementById('cat-nav-inner');
  if (!inner) return;
  inner.innerHTML = data.map((cat, i) => `
    <button class="cat-btn${i === 0 ? ' active' : ''}"
            data-cat="${i}"
            onclick="scrollToCategory(${i})">
      ${cat.category_fa}
    </button>
  `).join('');
}

function scrollToCategory(idx) {
  const section = document.getElementById(`cat-section-${idx}`);
  if (!section) return;
  const offset = 140; // navbar + cat-nav height
  const y = section.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
  setActiveNav(idx);
}
window.scrollToCategory = scrollToCategory;

function setActiveNav(idx) {
  document.querySelectorAll('.cat-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
  // Scroll the button into view inside the nav
  const activeBtn = document.querySelector(`.cat-btn[data-cat="${idx}"]`);
  activeBtn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

/* ─── Render Categories ──────────────────────────── */
function renderCategories(data) {
  const wrap = document.getElementById('categories-wrap');
  if (!wrap) return;
  wrap.innerHTML = '';

  if (!data.length) {
    wrap.innerHTML = `<div class="no-results persian">هیچ آیتمی یافت نشد.</div>`;
    return;
  }

  data.forEach((cat, idx) => {
    const section = document.createElement('section');
    section.className = 'category-section';
    section.id = `cat-section-${idx}`;

    const visibleItems = cat.items.filter(it => it.is_visible !== false);

    section.innerHTML = `
      <div class="cat-header">
        <h2 class="cat-title-fa">${cat.category_fa}</h2>
        ${cat.category_en ? `<span class="cat-title-en">${cat.category_en}</span>` : ''}
        <span class="cat-count">${visibleItems.length} آیتم</span>
      </div>
      <div class="items-grid" id="grid-${idx}">
        ${visibleItems.map((item, itemIdx) => renderItemCard(item, idx, itemIdx)).join('')}
      </div>
    `;
    wrap.appendChild(section);

    // Animate cards in
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(`#grid-${idx} .item-card`, {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: `#cat-section-${idx}`,
          start: 'top 85%',
          once: true,
        }
      });
    }
  });
}

/* ─── Item Card HTML ─────────────────────────────── */
function renderItemCard(item, catIdx, itemIdx) {
  const price = formatPrice(item.price);
  const img   = item.image || getPlaceholder(item);
  const badgesHtml = [
    item.is_new     ? `<span class="badge badge-new persian">جدید</span>` : '',
    item.is_special ? `<span class="badge badge-special persian">ویژه</span>` : '',
  ].join('');

  return `
    <article class="item-card" 
             data-cat="${catIdx}" 
             data-name-fa="${escHtml(item.name_fa)}" 
             data-name-en="${escHtml(item.name_en || '')}"
             onclick="openModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">
      <div class="item-img-wrap">
        <img src="${img}" 
             alt="${escHtml(item.name_fa)}" 
             loading="lazy"
             onerror="this.src='${getPlaceholder(item)}'"/>
        ${badgesHtml ? `<div class="item-badges">${badgesHtml}</div>` : ''}
      </div>
      <div class="item-body">
        <h3 class="item-name-fa">${escHtml(item.name_fa)}</h3>
        ${item.name_en ? `<p class="item-name-en">${escHtml(item.name_en)}</p>` : ''}
        ${item.description ? `<p class="item-desc">${escHtml(item.description)}</p>` : ''}
      </div>
      <div class="item-footer">
        <span class="item-price">${price} <span class="item-price-unit">هزار تومان</span></span>
        <span class="item-detail-btn" aria-label="جزئیات">+</span>
      </div>
    </article>
  `;
}

/* ─── Modal ──────────────────────────────────────── */
function initModal() {
  const modal   = document.getElementById('item-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;

  overlay?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(item) {
  const modal = document.getElementById('item-modal');
  if (!modal) return;

  document.getElementById('modal-img').src         = item.image || getPlaceholder(item);
  document.getElementById('modal-category').textContent = '';
  document.getElementById('modal-name-fa').textContent  = item.name_fa || '';
  document.getElementById('modal-name-en').textContent  = item.name_en || '';
  document.getElementById('modal-desc').textContent     = item.description || '—';
  document.getElementById('modal-price').textContent    = formatPrice(item.price) + ' هزار تومان';

  const badgesWrap = document.getElementById('modal-badges');
  badgesWrap.innerHTML = [
    item.is_new     ? `<span class="badge badge-new persian">جدید</span>` : '',
    item.is_special ? `<span class="badge badge-special persian">ویژه</span>` : '',
  ].join('');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
window.openModal = openModal;

function closeModal() {
  const modal = document.getElementById('item-modal');
  modal?.classList.remove('open');
  modal?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ─── Search ─────────────────────────────────────── */
function initSearch() {
  const input     = document.getElementById('menu-search-input');
  const clearBtn  = document.getElementById('search-clear');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    clearBtn.style.display = q ? 'block' : 'none';
    doSearch(q);
  });
  clearBtn?.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    doSearch('');
    input.focus();
  });
}

function doSearch(q) {
  if (!q) {
    filtered = allData;
    renderCategories(allData);
    buildCategoryNav(allData);
    return;
  }
  const lower = q.toLowerCase();
  filtered = allData.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.name_fa.includes(q) ||
      (item.name_en || '').toLowerCase().includes(lower) ||
      (item.description || '').includes(q)
    )
  })).filter(cat => cat.items.length > 0);

  renderCategories(filtered);
  buildCategoryNav(filtered);
}

/* ─── Scroll Spy ─────────────────────────────────── */
function initScrollSpy() {
  if (typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = parseInt(e.target.dataset.idx || '0');
        setActiveNav(idx);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  document.querySelectorAll('.category-section').forEach((sec, i) => {
    sec.dataset.idx = i;
    observer.observe(sec);
  });
}

/* ─── Back to Top ────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── Helpers ────────────────────────────────────── */
function showLoading(show) {
  document.getElementById('menu-loading')?.classList.toggle('hidden', !show);
  document.getElementById('categories-wrap')?.classList.toggle('hidden', show);
  document.getElementById('menu-error')?.classList.add('hidden');
}
function showError() {
  document.getElementById('menu-loading')?.classList.add('hidden');
  document.getElementById('menu-error')?.classList.remove('hidden');
}
function formatPrice(price) {
  const n = parseInt(price, 10) || 0;
  return n.toLocaleString('fa-IR');
}
function getPlaceholder(item) {
  const seed = (item.name_en || item.name_fa || 'food').replace(/\s+/g, '-').toLowerCase();
  return `https://picsum.photos/seed/${seed}-cb/400/300.webp`;
}
function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
