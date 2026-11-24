/* ============ INTAREO — shared logic ============ */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  const U = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const fmt = n => n.toLocaleString('uk-UA').replace(/,/g, ' ') + ' ₴';
  const page = document.body.dataset.page;

  /* ---------- icons ---------- */
  const I = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 5l-7 7 7 7"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m9 5 7 7-7 7"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="m5 12 5 5L20 7"/></svg>',
    arrow: '<svg viewBox="0 0 32 12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M0 6h30M25 1l5 5-5 5"/></svg>',
    tw: '<svg viewBox="0 0 24 24"><path d="M23 4.6a9 9 0 0 1-2.6.7 4.6 4.6 0 0 0 2-2.5 9 9 0 0 1-2.9 1.1A4.5 4.5 0 0 0 11.8 8 12.8 12.8 0 0 1 2.5 3.3a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.3 12.8 12.8 0 0 0 7.9 20.3c8.3 0 12.8-6.9 12.8-12.8v-.6A9 9 0 0 0 23 4.6Z"/></svg>',
    fb: '<svg viewBox="0 0 24 24"><path d="M14 8V6c0-1 .5-1.5 1.6-1.5H17V1h-2.6C11.6 1 10.5 2.8 10.5 5.6V8H8v3.5h2.5V23H14V11.5h2.7L17 8h-3Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM18.4 6.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM21.9 8c-.1-1.6-.4-3-1.6-4.3S17.6 2.1 16 2c-1.6-.1-6.4-.1-8 0-1.6.1-3 .4-4.3 1.6S2.1 6.4 2 8c-.1 1.6-.1 6.4 0 8 .1 1.6.4 3 1.6 4.3S6.4 21.9 8 22c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.3-1.6s1.5-2.7 1.6-4.3c.1-1.6.1-6.4 0-8Zm-2.1 9.8a3.2 3.2 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4a3.2 3.2 0 0 1-1.8-1.8C4.3 16.5 4.4 13.4 4.4 12s-.1-4.5.4-5.7A3.2 3.2 0 0 1 6.6 4.4C7.9 3.9 10.9 4 12.3 4s4.4-.1 5.7.4a3.2 3.2 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.5-.4 5.7Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12.3 1C6.2 1 3 5.1 3 9.6c0 2.1 1.1 4.6 2.9 5.5.3.1.4.1.5-.2l.4-1.7c0-.2 0-.3-.1-.5-.6-.7-1-1.9-1-3.1 0-3.1 2.3-6 6.3-6 3.4 0 5.8 2.3 5.8 5.6 0 3.8-1.9 6.4-4.4 6.4-1.4 0-2.4-1.1-2.1-2.5.4-1.7 1.2-3.5 1.2-4.7 0-1.1-.6-2-1.8-2-1.4 0-2.6 1.5-2.6 3.4 0 1.2.4 2 .4 2l-1.7 7.1c-.5 2.1.1 5.4.1 5.7 0 .2.3.2.4.1.2-.2 2.2-3.2 2.7-5.2l1-3.9c.5 1 2 1.8 3.6 1.8 4.7 0 8.1-4.3 8.1-9.7C21.3 4.8 17.2 1 12.3 1Z"/></svg>',
    be: '<svg viewBox="0 0 24 24"><path d="M8.2 11.3c.9-.4 1.6-1.2 1.6-2.5 0-2.4-1.8-3.1-4-3.1H0v12.5h6c2.3 0 4.4-1.1 4.4-3.6 0-1.6-.8-2.8-2.2-3.3ZM2.7 7.8h2.6c1 0 1.9.3 1.9 1.4 0 1.1-.7 1.5-1.7 1.5H2.7V7.8Zm2.9 8.3H2.7v-3.4h3c1.2 0 2 .5 2 1.8 0 1.3-.9 1.6-2.1 1.6Zm12-7.8c-3 0-5 2.2-5 5.1 0 3 1.9 5 5 5 2.3 0 3.8-1 4.6-3.3h-2.4c-.3.8-1.3 1.3-2.1 1.3-1.6 0-2.4-.9-2.4-2.4h7c.2-3-1.4-5.7-4.7-5.7Zm-2.3 4.1c.1-1.2.9-2 2.2-2 1.3 0 1.9.7 2 2h-4.2ZM15.2 5.9h5.4v1.3h-5.4V5.9Z"/></svg>',
    tg: '<svg viewBox="0 0 24 24"><path d="M21.9 3.4 18.6 19.8c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.2-8.3c.4-.4-.1-.6-.6-.2L6 13.4 1.1 11.9c-1.1-.3-1.1-1.1.2-1.6L20.5 2.9c.9-.3 1.7.2 1.4 1.5Z"/></svg>'
  };
  const SOC = {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    pinterest: 'https://www.pinterest.com/',
    twitter: 'https://x.com/',
    behance: 'https://www.behance.net/',
    telegram: 'https://t.me/'
  };
  const ext = 'target="_blank" rel="noopener noreferrer"';

  /* ---------- data ---------- */
  const PAGES = [
    { href: 'index.html', key: 'home', name: 'Головна' },
    { href: 'projects.html', key: 'projects', name: 'Проєкти' },
    { href: 'gallery.html', key: 'gallery', name: 'Галерея' },
    { href: 'shop.html', key: 'shop', name: 'Магазин' },
    { href: 'contact.html', key: 'contact', name: 'Контакти' }
  ];

  const PROJECTS = [
    { big: 'TERRA', script: 'cotta', img: U('1600585154340-be6161a56a0c', 2000),
      arch: 'Іван Коваль, Марія Ткаченко', loc: 'Яремче, Карпати', area: '173 м²', year: '2025', cat: 'Приватні будинки',
      tags: ['Компактність', 'Захищеність', 'Мінімалізм'],
      d1: 'Сучасний мінімалізм у Карпатах: компактний будинок на палях, захищений від вітрів і відкритий панорамними вікнами до гірського краєвиду.',
      d2: 'Гнучкий простір із розсувними дверима та прихованим входом веде діалог авангардної архітектури з суворим кліматом.' },
    { big: 'NORD', script: 'forest', img: U('1613490493576-7fde63acd811', 2000),
      arch: 'Олена Бойко, Андрій Мельник', loc: 'Буча, Київщина', area: '240 м²', year: '2024', cat: 'Заміські резиденції',
      tags: ['Тиша', 'Природні матеріали', 'Світло'],
      d1: 'Резиденція серед соснового лісу: дерево, бетон і скло формують простір, що змінюється разом зі світлом протягом дня.',
      d2: 'Тераси продовжують вітальню назовні, а внутрішній двір стає зеленим серцем будинку.' },
    { big: 'LOFT', script: 'noir', img: U('1600607687939-ce8a6c25118c', 2000),
      arch: 'Марія Ткаченко', loc: 'Київ, Поділ', area: '128 м²', year: '2024', cat: 'Квартири',
      tags: ['Індустріальність', 'Контраст', 'Затишок'],
      d1: 'Лофт в історичній будівлі Подолу: цегла, чорний метал і теплий дуб складаються в цілісну темну палітру.',
      d2: 'Відкрите планування з кухнею-островом і прихованими системами зберігання робить простір легким.' },
    { big: 'AURA', script: 'garden', img: U('1564013799919-ab600027ffc6', 2000),
      arch: 'Іван Коваль', loc: 'Одеса, Фонтан', area: '310 м²', year: '2023', cat: 'Приватні будинки',
      tags: ['Сад', 'Простір', 'Море'],
      d1: 'Світлий будинок біля моря з садом, басейном і широкими виносами даху, що захищають від спеки.',
      d2: 'Кожна кімната має вихід у сад — межа між інтер\'єром і природою майже зникає.' }
  ];

  const GALLERY = [
    { img: U('1618221195710-dd6b41faaea6', 1000), t: 'Вітальня «Пісок»', c: 'living', cn: 'Вітальні' },
    { img: U('1556909114-f6e7ad7d3136', 1000), t: 'Кухня «Графіт»', c: 'kitchen', cn: 'Кухні' },
    { img: U('1505693416388-ac5ce068fe85', 1000), t: 'Спальня «Льон»', c: 'bedroom', cn: 'Спальні' },
    { img: U('1552321554-5fefe8c9ef14', 1000), t: 'Ванна «Травертин»', c: 'bath', cn: 'Ванні' },
    { img: U('1600596542815-ffad4c1539a9', 1000), t: 'Будинок «Вілла»', c: 'exterior', cn: 'Екстер\'єр' },
    { img: U('1600210492486-724fe5c67fb0', 1000), t: 'Вітальня «Оліва»', c: 'living', cn: 'Вітальні' },
    { img: U('1600585154526-990dced4db0d', 1000), t: 'Кухня-їдальня «Дуб»', c: 'kitchen', cn: 'Кухні' },
    { img: U('1616594039964-ae9021a400a0', 1000), t: 'Спальня «Тераконт»', c: 'bedroom', cn: 'Спальні' },
    { img: U('1600566753190-17f0baa2a6c3', 1000), t: 'Ванна «Мармур»', c: 'bath', cn: 'Ванні' },
    { img: U('1512917774080-9991f1c4c750', 1000), t: 'Резиденція «Схил»', c: 'exterior', cn: 'Екстер\'єр' },
    { img: U('1616486338812-3dadae4b4ace', 1000), t: 'Вітальня «Ніч»', c: 'living', cn: 'Вітальні' },
    { img: U('1600566752355-35792bedcfea', 1000), t: 'Кухня «Біла»', c: 'kitchen', cn: 'Кухні' }
  ];

  const PRODUCTS = [
    { id: 'p1', n: 'Крісло Velour', c: 'chairs', cn: 'Крісла', p: 18900, old: 21500, img: U('1567538096630-e0c55bd6374c', 800), tag: 'Хіт' },
    { id: 'p2', n: 'Світильник Cage', c: 'light', cn: 'Освітлення', p: 6400, img: U('1524484485831-a92ffc0de03f', 800) },
    { id: 'p3', n: 'Диван Milano', c: 'sofas', cn: 'Дивани', p: 54200, img: U('1555041469-a586c61ea9bc', 800), tag: 'Новинка' },
    { id: 'p4', n: 'Стілець Oak', c: 'chairs', cn: 'Крісла', p: 7300, img: U('1586023492125-27b2c045efd7', 800) },
    { id: 'p5', n: 'Торшер Arc', c: 'light', cn: 'Освітлення', p: 9800, old: 11200, img: U('1507473885765-e6ed057f782c', 800) },
    { id: 'p6', n: 'Ваза Clay', c: 'decor', cn: 'Декор', p: 2100, img: U('1578500494198-246f612d3b3d', 800) },
    { id: 'p7', n: 'Дзеркало Halo', c: 'decor', cn: 'Декор', p: 8600, img: U('1618220179428-22790b461013', 800), tag: 'Новинка' },
    { id: 'p8', n: 'Крісло Nest', c: 'chairs', cn: 'Крісла', p: 23400, img: U('1598300042247-d088f8ab3a91', 800) }
  ];

  const SERVICES_IDX = [
    { t: 'Дизайн-проєкт інтер\'єру', s: 'Послуга', h: 'index.html#services' },
    { t: 'Авторський нагляд', s: 'Послуга', h: 'index.html#services' },
    { t: 'Комплектація', s: 'Послуга', h: 'index.html#services' },
    { t: 'Архітектура будинку', s: 'Послуга', h: 'index.html#services' },
    { t: 'Вартість і тарифи', s: 'Проєкти', h: 'projects.html#pricing' },
    { t: 'Часті питання', s: 'Контакти', h: 'contact.html#faq' },
    { t: 'Про студію', s: 'Головна', h: 'index.html#about' }
  ];

  /* ---------- header / footer render ---------- */
  const navLinks = cls => PAGES.map(p => `<a href="${p.href}" class="${cls || ''}${p.key === page ? ' active' : ''}">${p.name}</a>`).join('');
  const socRow = `<div class="soc-row">
      <a href="${SOC.instagram}" ${ext} aria-label="Instagram">${I.ig}</a>
      <a href="${SOC.facebook}" ${ext} aria-label="Facebook">${I.fb}</a>
      <a href="${SOC.pinterest}" ${ext} aria-label="Pinterest">${I.pin}</a>
      <a href="${SOC.telegram}" ${ext} aria-label="Telegram">${I.tg}</a></div>`;

  function renderHeader() {
    const holder = $('#header');
    if (!holder) return;
    if (document.body.dataset.header === 'pill') {
      holder.innerHTML = `<header class="pill-header">
        <nav class="pills">${navLinks('pill')}</nav>
        <a class="plogo" href="index.html" aria-label="Intareo — на головну"><span class="grid">${'<i></i>'.repeat(9)}</span><span><b>INTAREO</b><small>architects</small></span></a>
        <div class="pright">
          <a class="phone" href="tel:+380670000000">+38 067 000 00 00</a>
          <a href="contact.html#form"><span class="order-txt">Замовити проєкт</span> ${I.arrow}</a>
          <button class="burger" aria-label="Меню"><span></span><span></span></button>
        </div></header>`;
    } else {
      holder.innerHTML = `<header class="site-header">
        <div class="hbar">
          <a class="logo" href="index.html">Intareo</a>
          <nav class="nav">${navLinks()}</nav>
          <button class="burger" aria-label="Меню"><span></span><span></span></button>
        </div>
        <div class="hactions">
          <button class="hbtn js-cart" aria-label="Кошик">${I.bag}<span class="badge" data-n="0">0</span></button>
          <button class="hbtn js-search" aria-label="Пошук">${I.search}</button>
        </div></header>
        <div class="socials">
          <a href="${SOC.twitter}" ${ext} aria-label="X / Twitter">${I.tw}</a>
          <a href="${SOC.facebook}" ${ext} aria-label="Facebook">${I.fb}</a>
          <a href="${SOC.instagram}" ${ext} aria-label="Instagram">${I.ig}</a>
          <a href="${SOC.pinterest}" ${ext} aria-label="Pinterest">${I.pin}</a>
        </div>`;
    }
    document.body.insertAdjacentHTML('beforeend', `
      <div class="mmenu" id="mmenu">${navLinks()}${socRow}</div>
      <div class="search" id="search" role="dialog" aria-label="Пошук">
        <button class="xbtn js-search-close" aria-label="Закрити">${I.close}</button>
        <div class="search-box"><input id="q" type="search" placeholder="Пошук по сайту…" autocomplete="off">${I.search}</div>
        <div class="search-hint">Наприклад: «крісло», «кухня», «TERRA», «вартість». Enter — відкрити перший результат, Esc — закрити.</div>
        <div class="results" id="results"></div>
      </div>
      <div class="overlay" id="overlay"></div>
      <aside class="drawer" id="cart" aria-label="Кошик">
        <div class="drawer-head"><h3>Кошик</h3><button class="xbtn js-cart-close" aria-label="Закрити">${I.close}</button></div>
        <div class="drawer-body" id="cartBody"></div>
        <div class="drawer-foot" id="cartFoot"></div>
      </aside>
      <button class="totop" id="totop" aria-label="Нагору">${I.up}</button>
      <div class="toast" id="toast"></div>`);
  }

  function renderFooter() {
    const f = $('#footer');
    if (!f) return;
    f.innerHTML = `<footer class="footer"><div class="container">
      <div class="fgrid">
        <div class="fabout"><a class="logo" href="index.html">Intareo</a>
          <p>Студія дизайну інтер'єрів і архітектури. Створюємо простори, у яких хочеться жити, з 2013 року.</p>${socRow}</div>
        <div><h4>Сторінки</h4><ul>${PAGES.map(p => `<li><a href="${p.href}">${p.name}</a></li>`).join('')}</ul></div>
        <div><h4>Послуги</h4><ul>
          <li><a href="index.html#services">Дизайн-проєкт</a></li><li><a href="index.html#services">Авторський нагляд</a></li>
          <li><a href="index.html#services">Комплектація</a></li><li><a href="projects.html#pricing">Вартість</a></li></ul></div>
        <div><h4>Розсилка</h4><ul><li>Нові проєкти та знижки магазину — раз на місяць.</li></ul>
          <form class="subscribe js-subscribe" novalidate><input type="email" placeholder="Ваш e-mail" aria-label="E-mail"><button type="submit">Ок</button></form></div>
      </div>
      <div class="fbottom"><span>© ${new Date().getFullYear()} Intareo. Усі права захищені.</span>
        <span><a href="tel:+380670000000">+38 067 000 00 00</a> · <a href="mailto:hello@intareo.ua">hello@intareo.ua</a></span></div>
    </div></footer>`;
  }

  /* ---------- toast ---------- */
  let tT;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(tT);
    tT = setTimeout(() => t.classList.remove('show'), 2800);
  }

  /* ---------- overlays control ---------- */
  function lock(on) { document.body.classList.toggle('lock', on); }
  function closeAll() {
    $('#mmenu').classList.remove('open'); document.body.classList.remove('menu-open');
    $('#search').classList.remove('open');
    $('#cart').classList.remove('open'); $('#overlay').classList.remove('open');
    const lb = $('#lightbox'); if (lb) lb.classList.remove('open');
    lock(false);
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    document.addEventListener('click', e => {
      if (e.target.closest('.burger')) {
        const open = !$('#mmenu').classList.contains('open');
        closeAll();
        $('#mmenu').classList.toggle('open', open);
        document.body.classList.toggle('menu-open', open);
        lock(open);
      } else if (e.target.closest('#mmenu a')) {
        closeAll();
      }
    });
  }

  /* ---------- search ---------- */
  function initSearch() {
    const idx = [
      ...PAGES.map(p => ({ t: p.name, s: 'Сторінка', h: p.href })),
      ...PROJECTS.map((p, i) => ({ t: `${p.big} ${p.script} — ${p.loc}`, s: 'Проєкт', h: `projects.html?p=${i}` })),
      ...PRODUCTS.map(p => ({ t: `${p.n} — ${fmt(p.p)}`, s: 'Магазин · ' + p.cn, h: `shop.html?q=${encodeURIComponent(p.n)}` })),
      ...GALLERY.map(g => ({ t: g.t, s: 'Галерея · ' + g.cn, h: `gallery.html?c=${g.c}` })),
      ...SERVICES_IDX
    ];
    const q = $('#q'), res = $('#results');
    const draw = () => {
      const v = q.value.trim().toLowerCase();
      const list = v ? idx.filter(i => (i.t + ' ' + i.s).toLowerCase().includes(v)) : idx.slice(0, 5);
      res.innerHTML = list.length
        ? list.slice(0, 12).map((i, k) => `<a class="res${k === 0 && v ? ' focus' : ''}" href="${i.h}"><b>${i.t}</b><small>${i.s}</small></a>`).join('')
        : `<div class="res-empty">Нічого не знайдено за запитом «${q.value.replace(/</g, '&lt;')}».</div>`;
    };
    const open = () => { closeAll(); $('#search').classList.add('open'); lock(true); q.value = ''; draw(); setTimeout(() => q.focus(), 60); };
    document.addEventListener('click', e => {
      if (e.target.closest('.js-search')) open();
      if (e.target.closest('.js-search-close')) closeAll();
      if (e.target.closest('.res')) closeAll();
    });
    q.addEventListener('input', draw);
    q.addEventListener('keydown', e => {
      if (e.key === 'Enter') { const f = $('.res', res); if (f) { closeAll(); location.href = f.getAttribute('href'); } }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAll();
      if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); open(); }
    });
  }

  /* ---------- cart ---------- */
  const CART_KEY = 'intareo_cart';
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (e) { cart = {}; }
  const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {} drawCart(); };
  const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);

  function drawCart() {
    const count = cartCount();
    $$('.badge').forEach(b => { b.textContent = count; b.dataset.n = count; });
    const body = $('#cartBody'), foot = $('#cartFoot');
    if (!body) return;
    const items = Object.keys(cart).map(id => ({ ...PRODUCTS.find(p => p.id === id), q: cart[id] })).filter(i => i.id);
    if (!items.length) {
      body.innerHTML = `<div class="cart-empty">Кошик порожній.<br><a class="btn" href="shop.html">До магазину</a></div>`;
      foot.innerHTML = '';
      return;
    }
    body.innerHTML = items.map(i => `<div class="citem">
        <img class="ph" src="${i.img}" alt="${i.n}">
        <div><h4>${i.n}</h4><div class="cp">${fmt(i.p)}</div>
          <div class="qty"><button data-dec="${i.id}" aria-label="Менше">−</button><span>${i.q}</span><button data-inc="${i.id}" aria-label="Більше">+</button></div></div>
        <button class="rm" data-rm="${i.id}">Видалити</button></div>`).join('');
    const sum = items.reduce((a, i) => a + i.p * i.q, 0);
    foot.innerHTML = `<div class="total"><span>Разом</span><b>${fmt(sum)}</b></div>
      <form class="checkout" id="checkout" novalidate>
        <input class="input" name="name" placeholder="Ваше ім'я" required>
        <input class="input" name="phone" type="tel" placeholder="Телефон +380…" required>
        <div class="ferr" id="coErr"></div>
      </form>
      <button class="btn btn--block" id="coBtn">Оформити замовлення</button>`;
  }

  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    const p = PRODUCTS.find(x => x.id === id);
    toast(`«${p.n}» додано до кошика`);
    $$('.badge').forEach(b => { b.classList.add('bump'); setTimeout(() => b.classList.remove('bump'), 300); });
  }

  const phoneOk = v => v.replace(/\D/g, '').length >= 10;

  function initCart() {
    drawCart();
    const openCart = () => { closeAll(); $('#cart').classList.add('open'); $('#overlay').classList.add('open'); lock(true); };
    document.addEventListener('click', e => {
      const t = e.target;
      if (t.closest('.js-cart')) { e.preventDefault(); openCart(); }
      if (t.closest('.js-cart-close') || t.id === 'overlay') closeAll();
      const add = t.closest('[data-add]');
      if (add) {
        addToCart(add.dataset.add);
        add.classList.add('added'); add.textContent = 'Додано ✓';
        setTimeout(() => { add.classList.remove('added'); add.textContent = 'До кошика'; }, 1400);
      }
      if (t.dataset.inc) { cart[t.dataset.inc]++; saveCart(); }
      if (t.dataset.dec) { cart[t.dataset.dec]--; if (cart[t.dataset.dec] <= 0) delete cart[t.dataset.dec]; saveCart(); }
      if (t.dataset.rm) { delete cart[t.dataset.rm]; saveCart(); }
      if (t.id === 'coBtn') {
        const f = $('#checkout');
        if (!f.classList.contains('show')) { f.classList.add('show'); t.textContent = 'Підтвердити замовлення'; f.name.focus(); return; }
        const okName = f.name.value.trim().length >= 2, okPhone = phoneOk(f.phone.value);
        f.name.classList.toggle('err', !okName); f.phone.classList.toggle('err', !okPhone);
        if (!okName || !okPhone) { $('#coErr').textContent = 'Вкажіть ім\'я та коректний телефон.'; return; }
        cart = {}; saveCart(); closeAll();
        toast('Дякуємо! Замовлення прийнято — менеджер зателефонує протягом 15 хвилин.');
      }
    });
    if (location.hash === '#cart') setTimeout(openCart, 300);
  }

  /* ---------- misc global ---------- */
  function initGlobal() {
    // broken image fallback
    document.addEventListener('error', e => { if (e.target.tagName === 'IMG') e.target.classList.add('broken'); }, true);
    // scrolled state + to top
    const tt = $('#totop');
    const onScroll = () => {
      document.body.classList.toggle('scrolled', scrollY > 40);
      tt.classList.toggle('show', scrollY > 600);
    };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
    tt.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
    // subscribe
    document.addEventListener('submit', e => {
      if (e.target.classList.contains('js-subscribe')) {
        e.preventDefault();
        const i = e.target.querySelector('input');
        if (!/^\S+@\S+\.\S+$/.test(i.value.trim())) { toast('Введіть коректний e-mail'); i.focus(); return; }
        i.value = ''; toast('Ви підписалися на розсилку. Дякуємо!');
      }
    });
    // reveal
    const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: .12, rootMargin: '0px 0px -40px 0px' }) : null;
    $$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
  }

  /* ---------- page: home ---------- */
  function initHome() {
    const c = $('#homeProjects');
    if (c) c.innerHTML = PROJECTS.slice(0, 3).map((p, i) => `<a class="pcard reveal" href="projects.html?p=${i}">
        <img class="ph" src="${p.img}" alt="${p.big} ${p.script}" loading="lazy">
        <div class="info"><small>${p.cat}</small><h3>${p.big} ${p.script}</h3><span>${p.loc} · ${p.area}</span></div></a>`).join('');
  }

  /* ---------- page: projects ---------- */
  function initProjects() {
    const frame = $('.terra-frame');
    if (!frame) return;
    let cur = Math.min(Math.max(parseInt(new URLSearchParams(location.search).get('p'), 10) || 0, 0), PROJECTS.length - 1);
    const set = (i, anim) => {
      cur = (i + PROJECTS.length) % PROJECTS.length;
      const p = PROJECTS[cur];
      const apply = () => {
        $$('.t-layer img', frame).forEach(im => { im.src = p.img; im.alt = `${p.big} ${p.script}`; });
        $('.t-big', frame).textContent = p.big;
        $('.t-script', frame).textContent = p.script;
        $('.t-year', frame).innerHTML = `${p.year}<br>Архітектура зі змістом`;
        $('.t-tags', frame).innerHTML = p.tags.map(t => `<li>${t}</li>`).join('');
        $('.t-info', frame).innerHTML = `Студія: <b>Intareo architects</b><br>Архітектори: <b>${p.arch}</b><br>Розташування: <b>${p.loc}</b><br>Площа: <b>${p.area}</b><br>Рік: <b>${p.year}</b><br>Категорія: <b>${p.cat}</b>`;
        $('.t-desc', frame).innerHTML = `<p>${p.d1}</p><p>${p.d2}</p>`;
        $('.t-count', frame).textContent = `${String(cur + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}`;
        $$('.pcard[data-i]').forEach(c => c.classList.toggle('is-active', +c.dataset.i === cur));
        frame.classList.remove('t-swap');
      };
      if (anim) { frame.classList.add('t-swap'); setTimeout(apply, 380); } else apply();
    };
    $('.t-prev').addEventListener('click', () => set(cur - 1, true));
    $('.t-next').addEventListener('click', () => set(cur + 1, true));
    $$('.t-dot').forEach(d => d.addEventListener('click', e => { e.stopPropagation(); $$('.t-dot').forEach(x => x !== d && x.classList.remove('open')); d.classList.toggle('open'); }));
    document.addEventListener('click', () => $$('.t-dot').forEach(x => x.classList.remove('open')));
    document.addEventListener('keydown', e => {
      if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
      if (e.key === 'ArrowRight') set(cur + 1, true);
      if (e.key === 'ArrowLeft') set(cur - 1, true);
    });
    const list = $('#projList');
    list.innerHTML = PROJECTS.map((p, i) => `<button class="pcard reveal" data-i="${i}">
        <img class="ph" src="${p.img.replace('w=2000', 'w=900')}" alt="${p.big} ${p.script}" loading="lazy">
        <div class="info"><small>${p.cat} · ${p.year}</small><h3>${p.big} ${p.script}</h3><span>${p.loc} · ${p.area}</span></div></button>`).join('');
    list.addEventListener('click', e => {
      const c = e.target.closest('.pcard'); if (!c) return;
      scrollTo({ top: 0, behavior: 'smooth' });
      set(+c.dataset.i, true);
    });
    set(cur, false);
    // pricing buttons
    $$('[data-plan]').forEach(b => b.addEventListener('click', () => { location.href = 'contact.html?plan=' + encodeURIComponent(b.dataset.plan) + '#form'; }));
  }

  /* ---------- page: gallery ---------- */
  function initGallery() {
    const grid = $('#gallery');
    if (!grid) return;
    grid.innerHTML = GALLERY.map((g, i) => `<button class="gitem" data-c="${g.c}" data-i="${i}">
        <img class="ph" src="${g.img}" alt="${g.t}" loading="lazy"><div class="cap"><span>${g.cn}</span><b>${g.t}</b></div></button>`).join('');
    let visible = GALLERY.map((_, i) => i), cur = 0;
    const filter = c => {
      $$('.chip[data-f]').forEach(ch => ch.classList.toggle('active', ch.dataset.f === c));
      $$('.gitem', grid).forEach(it => it.classList.toggle('hide', c !== 'all' && it.dataset.c !== c));
      visible = $$('.gitem:not(.hide)', grid).map(it => +it.dataset.i);
    };
    $$('.chip[data-f]').forEach(ch => ch.addEventListener('click', () => filter(ch.dataset.f)));
    const startC = new URLSearchParams(location.search).get('c');
    filter(startC && $(`.chip[data-f="${startC}"]`) ? startC : 'all');

    const lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCap');
    const show = () => {
      const g = GALLERY[visible[cur]];
      lbImg.src = g.img.replace('w=1000', 'w=1800'); lbImg.alt = g.t;
      lbCap.innerHTML = `${g.t}<small>${g.cn} · ${cur + 1} / ${visible.length}</small>`;
    };
    grid.addEventListener('click', e => {
      const it = e.target.closest('.gitem'); if (!it) return;
      cur = visible.indexOf(+it.dataset.i); show(); lb.classList.add('open'); lock(true);
    });
    $('.lb-prev').addEventListener('click', () => { cur = (cur - 1 + visible.length) % visible.length; show(); });
    $('.lb-next').addEventListener('click', () => { cur = (cur + 1) % visible.length; show(); });
    $('.lb-close').addEventListener('click', closeAll);
    lb.addEventListener('click', e => { if (e.target === lb) closeAll(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'ArrowRight') $('.lb-next').click();
      if (e.key === 'ArrowLeft') $('.lb-prev').click();
    });
  }

  /* ---------- page: shop ---------- */
  function initShop() {
    const grid = $('#products');
    if (!grid) return;
    let cat = 'all', sort = 'pop';
    const qParam = (new URLSearchParams(location.search).get('q') || '').toLowerCase();
    const draw = () => {
      let list = PRODUCTS.filter(p => cat === 'all' || p.c === cat);
      if (qParam && cat === 'all') list = list.filter(p => p.n.toLowerCase().includes(qParam));
      if (sort === 'asc') list = [...list].sort((a, b) => a.p - b.p);
      if (sort === 'desc') list = [...list].sort((a, b) => b.p - a.p);
      if (sort === 'name') list = [...list].sort((a, b) => a.n.localeCompare(b.n, 'uk'));
      grid.innerHTML = list.length ? list.map(p => `<article class="product">
          <div class="pimg"><img class="ph" src="${p.img}" alt="${p.n}" loading="lazy">${p.tag ? `<span class="ptag">${p.tag}</span>` : ''}</div>
          <div class="pbody"><span class="pcat">${p.cn}</span><h3>${p.n}</h3>
            <div class="prow"><span class="price">${fmt(p.p)}${p.old ? `<s>${fmt(p.old)}</s>` : ''}</span>
            <button class="addbtn" data-add="${p.id}">До кошика</button></div></div></article>`).join('')
        : `<div class="empty">Товарів не знайдено.</div>`;
      $('#shopCount').textContent = `${list.length} товар${list.length === 1 ? '' : list.length < 5 && list.length ? 'и' : 'ів'}`;
    };
    $$('.chip[data-cat]').forEach(ch => ch.addEventListener('click', () => {
      cat = ch.dataset.cat;
      $$('.chip[data-cat]').forEach(x => x.classList.toggle('active', x === ch));
      if (qParam) history.replaceState(null, '', 'shop.html');
      draw();
    }));
    $('#sort').addEventListener('change', e => { sort = e.target.value; draw(); });
    draw();
  }

  /* ---------- page: contact ---------- */
  function initContact() {
    const f = $('#contactForm');
    if (f) {
      const plan = new URLSearchParams(location.search).get('plan');
      if (plan && [...f.service.options].some(o => o.value === plan)) f.service.value = plan;
      const err = (el, msg) => { el.classList.toggle('err', !!msg); const n = el.parentElement.querySelector('.ferr'); if (n) n.textContent = msg || ''; return !msg; };
      f.addEventListener('submit', e => {
        e.preventDefault();
        let ok = true;
        ok = err(f.name, f.name.value.trim().length < 2 ? 'Вкажіть ім\'я' : '') && ok;
        ok = err(f.phone, phoneOk(f.phone.value) ? '' : 'Вкажіть телефон у форматі +380…') && ok;
        ok = err(f.email, !f.email.value.trim() || /^\S+@\S+\.\S+$/.test(f.email.value.trim()) ? '' : 'Некоректний e-mail') && ok;
        const agree = f.agree.checked;
        f.agree.closest('.check').classList.toggle('err', !agree);
        if (!ok || !agree) { toast('Перевірте поля форми'); return; }
        f.style.display = 'none';
        $('#formSuccess').classList.add('show');
        $('#sName').textContent = f.name.value.trim();
      });
      $$('input,textarea', f).forEach(i => i.addEventListener('input', () => { i.classList.remove('err'); const n = i.parentElement.querySelector('.ferr'); if (n) n.textContent = ''; }));
      $('#againBtn').addEventListener('click', () => { f.reset(); f.style.display = ''; $('#formSuccess').classList.remove('show'); });
    }
    $$('.faq-q').forEach(q => q.addEventListener('click', () => {
      const it = q.parentElement, open = !it.classList.contains('open');
      $$('.faq-item').forEach(x => { x.classList.remove('open'); x.querySelector('.faq-q').setAttribute('aria-expanded', 'false'); });
      it.classList.toggle('open', open); q.setAttribute('aria-expanded', String(open));
    }));
  }

  /* ---------- boot ---------- */
  renderHeader();
  renderFooter();
  initMenu();
  initSearch();
  initCart();
  initHome();
  initProjects();
  initGallery();
  initShop();
  initContact();
  initGlobal();
  window.INTAREO = { PROJECTS, GALLERY, PRODUCTS };
})();
