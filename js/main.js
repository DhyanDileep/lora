// ============================================================
// LORA — Premium Jewellery  |  Main JavaScript
// ============================================================

// ── Data ────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: 'LORA Signature Gold Necklace',
    price: 28500,
    originalPrice: 34000,
    category: 'necklaces',
    material: '18K Yellow Gold',
    badge: 'Bestseller',
    badgeType: 'gold',
    newArrival: false,
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    desc: 'A delicate 18K gold chain necklace with a signature LORA pendant, crafted for everyday elegance.',
    sizes: ['16"', '18"', '20"'],
    metals: ['18K Yellow Gold', '18K Rose Gold'],
    popularity: 95,
  },
  {
    id: 2,
    name: 'Celeste Diamond Ring',
    price: 64900,
    originalPrice: null,
    category: 'rings',
    material: '18K White Gold',
    badge: 'New Arrival',
    badgeType: 'outline',
    newArrival: true,
    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    desc: 'A timeless solitaire set with a brilliant-cut diamond in 18K white gold.',
    sizes: ['5', '6', '7', '8'],
    metals: ['18K White Gold', '18K Yellow Gold', 'Platinum'],
    popularity: 88,
  },
  {
    id: 3,
    name: 'Aurelia Hoop Earrings',
    price: 14200,
    originalPrice: null,
    category: 'earrings',
    material: '18K Yellow Gold',
    badge: 'Bestseller',
    badgeType: 'gold',
    newArrival: false,
    img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    desc: 'Polished 18K gold hoop earrings. Effortless, minimal, and endlessly wearable.',
    sizes: ['Small', 'Medium', 'Large'],
    metals: ['18K Yellow Gold', '18K Rose Gold'],
    popularity: 92,
  },
  {
    id: 4,
    name: 'Solstice Gold Bracelet',
    price: 19800,
    originalPrice: 22500,
    category: 'bracelets',
    material: '18K Yellow Gold',
    badge: null,
    badgeType: null,
    newArrival: false,
    img: 'https://images.unsplash.com/photo-1573408301185-9519f94a5fbe?w=600&q=80',
    desc: 'A beautifully balanced gold link bracelet, designed to catch the light with every movement.',
    sizes: ['6.5"', '7"', '7.5"'],
    metals: ['18K Yellow Gold'],
    popularity: 75,
  },
  {
    id: 5,
    name: 'Eternal Solitaire Pendant',
    price: 38000,
    originalPrice: null,
    category: 'necklaces',
    material: '18K White Gold',
    badge: 'New Arrival',
    badgeType: 'outline',
    newArrival: true,
    img: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    desc: 'A brilliant diamond solitaire pendant suspended on a fine 18K white gold chain.',
    sizes: ['16"', '18"'],
    metals: ['18K White Gold', 'Platinum'],
    popularity: 82,
  },
  {
    id: 6,
    name: 'Lumière Pearl Earrings',
    price: 11500,
    originalPrice: null,
    category: 'earrings',
    material: 'Freshwater Pearl & Gold',
    badge: null,
    badgeType: null,
    newArrival: true,
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    desc: 'Lustrous freshwater pearl drops set in 18K gold. Refined, feminine, and sophisticated.',
    sizes: ['One Size'],
    metals: ['18K Yellow Gold', '18K Rose Gold'],
    popularity: 70,
  },
  {
    id: 7,
    name: 'Heritage Gold Bangle',
    price: 24500,
    originalPrice: 28000,
    category: 'bracelets',
    material: '22K Yellow Gold',
    badge: 'Bestseller',
    badgeType: 'gold',
    newArrival: false,
    img: 'https://images.unsplash.com/photo-1630350069851-af3a5ec7a8e4?w=600&q=80',
    desc: 'A classic wide bangle in 22K yellow gold. A timeless heirloom-worthy piece.',
    sizes: ['Small', 'Medium', 'Large'],
    metals: ['22K Yellow Gold'],
    popularity: 80,
  },
  {
    id: 8,
    name: 'Celeste Tennis Bracelet',
    price: 89000,
    originalPrice: null,
    category: 'bracelets',
    material: '18K White Gold & Diamonds',
    badge: 'New Arrival',
    badgeType: 'outline',
    newArrival: true,
    img: 'https://images.unsplash.com/photo-1596944924591-e5be8a56f87b?w=600&q=80',
    desc: 'A breathtaking row of round-cut diamonds set in 18K white gold. Pure brilliance.',
    sizes: ['6"', '6.5"', '7"', '7.5"'],
    metals: ['18K White Gold'],
    popularity: 98,
  },
];

const COLLECTIONS = [
  { name: 'Gold Essentials', desc: 'Timeless pieces in fine gold', img: 'images/collection_gold.png', filter: 'all' },
  { name: 'Diamond Elegance', desc: 'Where brilliance meets beauty', img: 'images/collection_diamond.png', filter: 'rings' },
  { name: 'Rings of Romance', desc: 'Crafted to celebrate love', img: 'images/collection_rings.png', filter: 'rings' },
  { name: 'Everyday Earrings', desc: 'Refined ease, every day', img: 'images/collection_earrings.png', filter: 'earrings' },
  { name: 'Statement Necklaces', desc: 'Bold beauty, refined craft', img: 'images/collection_necklaces.png', filter: 'necklaces' },
  { name: 'Timeless Bracelets', desc: 'Adorn every wrist with grace', img: 'images/collection_bracelets.png', filter: 'bracelets' },
];

const TESTIMONIALS = [
  {
    name: 'Ananya M.',
    initials: 'AM',
    product: 'Signature Gold Necklace',
    text: 'Beautifully presented and incredibly elegant. The necklace feels special enough for celebrations and refined enough for everyday wear. LORA has become my go-to for gifting.',
    rating: 5,
  },
  {
    name: 'Meera R.',
    initials: 'MR',
    product: 'Celeste Diamond Ring',
    text: 'A timeless design with lovely attention to detail. The entire shopping experience felt thoughtful and premium — from browsing to unboxing.',
    rating: 5,
  },
  {
    name: 'Aisha K.',
    initials: 'AK',
    product: 'Aurelia Hoop Earrings',
    text: 'Minimal, sophisticated, and easy to style. These have quickly become one of my favourite accessories. I wear them almost every single day.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    initials: 'PS',
    product: 'Heritage Gold Bangle',
    text: 'The bangle is stunning — hefty and substantial, exactly what I wanted. The craftsmanship is truly exceptional for the price.',
    rating: 5,
  },
  {
    name: 'Nisha T.',
    initials: 'NT',
    product: 'Lumière Pearl Earrings',
    text: 'I was looking for pearl earrings that felt fresh and modern rather than old-fashioned. LORA delivered perfectly — these are exquisite.',
    rating: 5,
  },
];

const FAQS = [
  { q: 'What materials do you use?', a: 'Our jewellery is crafted using 18K and 22K gold, freshwater pearls, and high-quality natural stones. All pieces are clearly labelled with their metal content and stone specifications.' },
  { q: 'Do you offer custom jewellery?', a: 'Yes, we work with select clients on bespoke commissions. Please reach out via our contact form with your requirements and we will be happy to discuss options.' },
  { q: 'How do I care for my jewellery?', a: 'Store each piece separately in a soft pouch or box. Avoid contact with perfumes, lotions, and water. Clean gently with a soft lint-free cloth. We recommend professional cleaning once a year.' },
  { q: 'What is your return policy?', a: 'We accept returns within 15 days of delivery for items in original, unworn condition with all packaging intact. Custom orders are non-returnable.' },
  { q: 'How long does shipping take?', a: 'Standard delivery within India takes 5–7 business days. Express shipping (2–3 days) is available at checkout. International shipping is available for select destinations.' },
  { q: 'Is gift wrapping available?', a: 'All LORA orders come beautifully packaged by default. You can add a personalised gift message at checkout at no extra charge.' },
];

const GALLERY_IMGS = [
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
  'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
  'https://images.unsplash.com/photo-1630350069851-af3a5ec7a8e4?w=600&q=80',
  'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
  'https://images.unsplash.com/photo-1573408301185-9519f94a5fbe?w=600&q=80',
];

// ── State ────────────────────────────────────────────────────
let cart     = JSON.parse(localStorage.getItem('lora_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('lora_wishlist') || '[]');
let currentFilter = 'all';
let currentSort   = 'popularity';
let searchQuery   = '';
let testimonialsIndex = 0;
let testimonialsAutoplay = null;

// ── Helpers ──────────────────────────────────────────────────
const fmt = n => '₹' + n.toLocaleString('en-IN');
const saveCart     = () => localStorage.setItem('lora_cart', JSON.stringify(cart));
const saveWishlist = () => localStorage.setItem('lora_wishlist', JSON.stringify(wishlist));

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Navigation ───────────────────────────────────────────────
function initNav() {
  const nav  = document.getElementById('main-nav');
  const ham  = document.getElementById('hamburger');
  const mob  = document.getElementById('mobile-nav');
  const searchBtn  = document.getElementById('search-btn');
  const searchWrap = document.getElementById('search-wrap');
  const searchInput= document.getElementById('search-input');
  const searchClose= document.getElementById('search-close');

  // Scroll behaviour
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // Hamburger
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow = '';
  }));

  // Search
  searchBtn.addEventListener('click', () => {
    searchWrap.classList.toggle('open');
    if (searchWrap.classList.contains('open')) searchInput.focus();
  });
  searchClose.addEventListener('click', () => searchWrap.classList.remove('open'));
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase();
    renderProducts();
    // Scroll to products section
    if (searchQuery.length > 0) {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ── Hero ─────────────────────────────────────────────────────
function initHero() {
  document.getElementById('hero').classList.add('loaded');
}

// ── Collections ──────────────────────────────────────────────
function renderCollections() {
  const grid = document.getElementById('collections-grid');
  grid.innerHTML = COLLECTIONS.map(c => `
    <article class="collection-card" onclick="filterByCollection('${c.filter}')" role="button" tabindex="0" aria-label="Explore ${c.name}">
      <img src="${c.img}" alt="${c.name}" loading="lazy">
      <div class="collection-overlay">
        <h3 class="collection-card-name">${c.name}</h3>
        <p class="collection-card-desc">${c.desc}</p>
        <span class="collection-link">
          Explore
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </article>
  `).join('');

  // Keyboard accessibility
  grid.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') card.click(); });
  });
}

function filterByCollection(filter) {
  currentFilter = filter;
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === filter);
  });
  renderProducts();
}

// ── Products ─────────────────────────────────────────────────
function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (currentFilter !== 'all') list = list.filter(p => p.category === currentFilter);
  if (searchQuery) list = list.filter(p =>
    p.name.toLowerCase().includes(searchQuery) ||
    p.material.toLowerCase().includes(searchQuery) ||
    p.category.toLowerCase().includes(searchQuery)
  );
  if (currentSort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (currentSort === 'popularity') list.sort((a, b) => b.popularity - a.popularity);
  if (currentSort === 'newest')     list.sort((a, b) => b.newArrival - a.newArrival);
  return list;
}

function productCardHTML(p, extraClass = '') {
  const wishlisted = wishlist.includes(p.id);
  const badge = p.badge
    ? `<div class="product-card-badge"><span class="tag tag-${p.badgeType}">${p.badge}</span></div>` : '';
  const original = p.originalPrice
    ? `<span class="original">${fmt(p.originalPrice)}</span>` : '';
  return `
    <article class="product-card ${extraClass}" data-id="${p.id}">
      <div class="product-card-image">
        ${badge}
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="product-actions">
          <button class="product-action-btn wishlist-btn ${wishlisted ? 'wishlisted' : ''}"
            data-id="${p.id}" aria-label="Toggle wishlist for ${p.name}">
            <svg viewBox="0 0 24 24" fill="${wishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button class="product-action-btn quickview-btn" data-id="${p.id}" aria-label="Quick view ${p.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
        <button class="product-atb-overlay" data-id="${p.id}" aria-label="Add ${p.name} to bag">Add to Bag</button>
      </div>
      <div class="product-card-info">
        <h3 class="product-card-name">${p.name}</h3>
        <p class="product-card-meta">${p.material}</p>
        <p class="product-card-price">${original}${fmt(p.price)}</p>
      </div>
    </article>
  `;
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const filtered = getFilteredProducts();
  if (filtered.length === 0) {
    grid.innerHTML = '<p class="no-results">No pieces found. Try a different search or filter.</p>';
    return;
  }
  grid.innerHTML = filtered.map(p => productCardHTML(p)).join('');
  attachProductEvents(grid);
}

function renderNewArrivals() {
  const grid = document.getElementById('new-arrivals-grid');
  const items = PRODUCTS.filter(p => p.newArrival).slice(0, 4);
  grid.innerHTML = items.map(p => productCardHTML(p)).join('');
  attachProductEvents(grid);
}

function attachProductEvents(container) {
  container.querySelectorAll('.product-atb-overlay').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });
  container.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });
  container.querySelectorAll('.quickview-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openQuickView(parseInt(btn.dataset.id));
    });
  });
}

function initProductFilters() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderProducts();
    });
  });
  document.getElementById('sort-select').addEventListener('change', e => {
    currentSort = e.target.value;
    renderProducts();
  });
}

// ── Cart ─────────────────────────────────────────────────────
function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty, name: product.name, price: product.price, img: product.img, material: product.material });
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to bag`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count  = cart.reduce((s, i) => s + i.qty, 0);
  const badge  = document.getElementById('cart-badge');
  const badge2 = document.getElementById('cart-badge-mob');
  [badge, badge2].forEach(b => {
    if (!b) return;
    b.textContent = count;
    b.classList.toggle('visible', count > 0);
  });
  // Update drawer header count
  const hdr = document.getElementById('cart-header-count');
  if (hdr) hdr.textContent = count ? `(${count})` : '';
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const empty     = document.getElementById('cart-empty');
  const footer    = document.getElementById('cart-footer');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    empty.classList.add('visible');
    if (footer) footer.style.display = 'none';
    return;
  }
  empty.classList.remove('visible');
  if (footer) footer.style.display = '';

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="cart-item-details">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-meta">${item.material}</p>
        <p class="cart-item-price">${fmt(item.price)}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1" aria-label="Increase quantity">+</button>
          <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  subtotalEl.textContent = fmt(subtotal);

  // Events
  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta)));
  });
  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

function initCart() {
  const openBtns  = document.querySelectorAll('[data-open-cart]');
  const overlay   = document.getElementById('cart-overlay');
  const drawer    = document.getElementById('cart-drawer');
  const closeBtn  = document.getElementById('close-cart');
  const continueBtn = document.getElementById('cart-continue');

  const openCart = () => {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  };
  const closeCart = () => {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', openCart));
  overlay.addEventListener('click', closeCart);
  closeBtn.addEventListener('click', closeCart);
  if (continueBtn) continueBtn.addEventListener('click', closeCart);

  updateCartUI();
}

// ── Wishlist ─────────────────────────────────────────────────
function toggleWishlist(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    showToast(`${product.name} added to wishlist`);
  } else {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  }
  saveWishlist();
  // Update all wishlist buttons
  document.querySelectorAll(`.wishlist-btn[data-id="${id}"]`).forEach(btn => {
    const inList = wishlist.includes(id);
    btn.classList.toggle('wishlisted', inList);
    btn.querySelector('svg').setAttribute('fill', inList ? 'currentColor' : 'none');
  });
  // Update wishlist badge
  const wBadge = document.getElementById('wishlist-badge');
  if (wBadge) {
    wBadge.textContent = wishlist.length;
    wBadge.classList.toggle('visible', wishlist.length > 0);
  }
}

function initWishlist() {
  const wBadge = document.getElementById('wishlist-badge');
  if (wBadge && wishlist.length > 0) {
    wBadge.textContent = wishlist.length;
    wBadge.classList.add('visible');
  }
}

// ── Quick View ───────────────────────────────────────────────
function openQuickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const overlay = document.getElementById('quickview-overlay');
  const modal   = document.getElementById('quickview-modal');
  const original = p.originalPrice ? `<span class="original" style="font-size:.9rem;color:var(--mid-grey);text-decoration:line-through;margin-right:.4rem">${fmt(p.originalPrice)}</span>` : '';

  modal.innerHTML = `
    <div class="qv-image">
      <img src="${p.img}" alt="${p.name}">
    </div>
    <div class="qv-body">
      <button class="qv-close" id="qv-close-btn" aria-label="Close quick view">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      ${p.badge ? `<span class="tag tag-${p.badgeType}">${p.badge}</span>` : ''}
      <h2 class="qv-name">${p.name}</h2>
      <p class="qv-meta">${p.material}</p>
      <p class="qv-price">${original}${fmt(p.price)}</p>
      <div class="qv-divider"></div>
      <p style="font-size:.85rem;line-height:1.7;color:var(--charcoal)">${p.desc}</p>
      <div>
        <p class="qv-label">Metal</p>
        <div class="qv-options">
          ${p.metals.map((m, i) => `<button class="qv-option${i === 0 ? ' selected' : ''}">${m}</button>`).join('')}
        </div>
      </div>
      <div>
        <p class="qv-label">Size</p>
        <div class="qv-options">
          ${p.sizes.map((s, i) => `<button class="qv-option${i === 0 ? ' selected' : ''}">${s}</button>`).join('')}
        </div>
      </div>
      <div class="qv-actions">
        <button class="qv-atb btn" data-id="${p.id}">Add to Bag</button>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Option selection
  modal.querySelectorAll('.qv-options').forEach(group => {
    group.querySelectorAll('.qv-option').forEach(opt => {
      opt.addEventListener('click', () => {
        group.querySelectorAll('.qv-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });
    });
  });

  modal.querySelector('#qv-close-btn').addEventListener('click', closeQuickView);
  modal.querySelector('.qv-atb').addEventListener('click', () => {
    addToCart(parseInt(modal.querySelector('.qv-atb').dataset.id));
    closeQuickView();
  });
}

function closeQuickView() {
  document.getElementById('quickview-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initQuickView() {
  document.getElementById('quickview-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('quickview-overlay')) closeQuickView();
  });
}

// ── Testimonials ─────────────────────────────────────────────
function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dots  = document.getElementById('t-dots');
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">
        ${Array(t.rating).fill('<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>').join('')}
      </div>
      <div class="testimonial-quote-icon">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
      </div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-footer">
        <div class="testimonial-avatar">${t.initials}</div>
        <div>
          <p class="testimonial-name">${t.name}</p>
          <p class="testimonial-product">${t.product}</p>
        </div>
      </div>
    </div>
  `).join('');

  if (dots) {
    dots.innerHTML = TESTIMONIALS.map((_, i) =>
      `<button class="t-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
    ).join('');
    dots.querySelectorAll('.t-dot').forEach(dot => {
      dot.addEventListener('click', () => gotoTestimonial(parseInt(dot.dataset.idx)));
    });
  }
}

function gotoTestimonial(idx) {
  const track      = document.getElementById('testimonials-track');
  const cards      = track.querySelectorAll('.testimonial-card');
  const dots       = document.querySelectorAll('.t-dot');
  const perView    = window.innerWidth < 768 ? 1 : 3;
  const maxIdx     = Math.max(0, cards.length - perView);
  testimonialsIndex = Math.max(0, Math.min(idx, maxIdx));
  const cardW      = cards[0].offsetWidth + 24; // gap = 1.5rem ~ 24px
  track.style.transform = `translateX(-${testimonialsIndex * cardW}px)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === testimonialsIndex));
}

function initTestimonials() {
  document.getElementById('t-prev')?.addEventListener('click', () => gotoTestimonial(testimonialsIndex - 1));
  document.getElementById('t-next')?.addEventListener('click', () => gotoTestimonial(testimonialsIndex + 1));
  // Autoplay
  testimonialsAutoplay = setInterval(() => gotoTestimonial((testimonialsIndex + 1) % TESTIMONIALS.length), 5000);
  // Pause on hover
  const wrap = document.getElementById('testimonials-track-wrap');
  if (wrap) {
    wrap.addEventListener('mouseenter', () => clearInterval(testimonialsAutoplay));
    wrap.addEventListener('mouseleave', () => {
      testimonialsAutoplay = setInterval(() => gotoTestimonial((testimonialsIndex + 1) % TESTIMONIALS.length), 5000);
    });
  }
}

// ── Gallery ──────────────────────────────────────────────────
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = GALLERY_IMGS.map((src, i) => `
    <div class="gallery-item" style="aspect-ratio: ${i === 0 ? '2/3' : '1/1'}">
      <img src="${src}" alt="LORA editorial ${i + 1}" loading="lazy">
      <div class="gallery-item-overlay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      </div>
    </div>
  `).join('');
}

// ── API Section ──────────────────────────────────────────────
async function fetchApiProducts() {
  const grid    = document.getElementById('api-products-grid');
  const retryBtn = document.getElementById('api-retry');
  if (!grid) return;

  // Show skeletons
  grid.innerHTML = Array(8).fill(`
    <div class="skeleton-card">
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton skeleton-line" style="margin:12px 12px 6px"></div>
      <div class="skeleton skeleton-line short" style="margin:0 12px 12px"></div>
    </div>
  `).join('');

  try {
    const res  = await fetch('https://dummyjson.com/products?limit=8&skip=0&select=id,title,description,price,thumbnail,category');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const products = data.products || [];

    grid.innerHTML = products.map(p => {
      const priceInr = Math.round(p.price * 83);
      return `
        <div class="api-product-card">
          <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
          <div class="api-card-body">
            <h4>${p.title}</h4>
            <p>${p.description}</p>
            <p class="price">${fmt(priceInr)}</p>
          </div>
        </div>
      `;
    }).join('');

    if (retryBtn) retryBtn.style.display = 'none';
  } catch (err) {
    console.error('API error:', err);
    grid.innerHTML = `
      <div class="api-error" style="grid-column:1/-1">
        <p>Unable to load products at this time.</p>
        <p style="font-size:.8rem;margin-bottom:1rem">Error: ${err.message}</p>
        <button id="api-retry" class="btn btn-outline" onclick="fetchApiProducts()">Try Again</button>
      </div>
    `;
  }
}

// ── Video Section ─────────────────────────────────────────────
function initVideo() {
  const video    = document.getElementById('promo-video');
  const playBtn  = document.getElementById('vid-play');
  const muteBtn  = document.getElementById('vid-mute');
  const progress = document.getElementById('vid-progress');
  const fill     = document.getElementById('vid-progress-fill');
  const timeEl   = document.getElementById('vid-time');

  if (!video || !video.src) return; // No video source yet

  video.classList.add('has-src');
  document.querySelector('.video-placeholder')?.style.setProperty('display', 'none');

  playBtn?.addEventListener('click', () => {
    if (video.paused) { video.play(); playBtn.innerHTML = pauseIcon(); }
    else              { video.pause(); playBtn.innerHTML = playIcon(); }
  });

  muteBtn?.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted ? muteIcon() : unmuteIcon();
  });

  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    if (fill)  fill.style.width = pct + '%';
    if (timeEl) timeEl.textContent = fmtTime(video.currentTime) + ' / ' + fmtTime(video.duration);
  });

  progress?.addEventListener('click', e => {
    const rect = progress.getBoundingClientRect();
    video.currentTime = ((e.clientX - rect.left) / rect.width) * video.duration;
  });

  video.addEventListener('ended', () => { if (playBtn) playBtn.innerHTML = playIcon(); });
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}
function playIcon()   { return '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>'; }
function pauseIcon()  { return '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'; }
function muteIcon()   { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>'; }
function unmuteIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>'; }

// ── Contact Form ──────────────────────────────────────────────
function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      const group = field.closest('.form-group');
      const errEl = group?.querySelector('.form-error-msg');
      if (!field.value.trim()) {
        group?.classList.add('error');
        if (errEl) errEl.textContent = 'This field is required.';
        valid = false;
      } else if (field.type === 'email' && !/\S+@\S+\.\S+/.test(field.value)) {
        group?.classList.add('error');
        if (errEl) errEl.textContent = 'Please enter a valid email address.';
        valid = false;
      } else {
        group?.classList.remove('error');
      }
    });

    if (!valid) return;

    const submitBtn = form.querySelector('[type=submit]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    // Simulate network delay (replace with real fetch to backend/Formspree)
    setTimeout(() => {
      status.textContent = '✓ Thank you! Your message has been received. We\'ll be in touch within 24 hours.';
      status.className = 'form-status success';
      form.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 1500);
  });

  // Real-time clear errors
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.closest('.form-group')?.classList.remove('error');
    });
  });
}

// ── FAQ ───────────────────────────────────────────────────────
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-ans-${i}">
        ${f.q}
        <span class="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div class="faq-answer" id="faq-ans-${i}" role="region">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const open = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      list.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
      if (!open) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ── Newsletter ────────────────────────────────────────────────
function initNewsletter() {
  const form    = document.getElementById('newsletter-form');
  const success = document.getElementById('newsletter-success');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input').value.trim();
    if (!email || !/\S+@\S+\.\S+/.test(email)) { showToast('Please enter a valid email.'); return; }
    form.style.display = 'none';
    if (success) { success.style.display = 'block'; }
    showToast('Welcome to LORA!');
  });
}

// ── Back to Top ───────────────────────────────────────────────
function initBackToTop() {
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Intersection Observer (fade-in on scroll) ─────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.collection-card, .product-card, .testimonial-card, .brand-value').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .7s var(--ease-out), transform .7s var(--ease-out)';
    observer.observe(el);
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHero();
  renderCollections();
  renderProducts();
  initProductFilters();
  renderNewArrivals();
  initCart();
  initWishlist();
  initQuickView();
  renderTestimonials();
  initTestimonials();
  renderGallery();
  renderFAQ();
  initContactForm();
  initNewsletter();
  initBackToTop();
  initVideo();
  fetchApiProducts();
  setTimeout(initScrollAnimations, 100);
});
