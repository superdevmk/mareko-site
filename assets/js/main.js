/* MAREKO.MK — Main JS */
(function () {
  'use strict';

  const NAV_ITEMS = [
    { href: 'index.html', label: 'Дома', id: 'home' },
    { href: 'za-nas.html', label: 'За нас', id: 'about' },
    { href: 'kontakt.html', label: 'Контакт', id: 'contact' },
    { href: 'zachlenuvanje.html', label: 'Зачленување', id: 'membership' },
    { href: 'dokumenti.html', label: 'Документи', id: 'documents' },
    { href: 'partneri.html', label: 'Партнери', id: 'partners' },
  ];

  const SEARCH_INDEX = [
    { title: 'Дома', url: 'index.html', keywords: 'дoma mareko почетна' },
    { title: 'За нас', url: 'za-nas.html', keywords: 'профил мисија основачи' },
    { title: 'Контакт', url: 'kontakt.html', keywords: 'адреса email телефон info@mareko.mk' },
    { title: 'Зачленување', url: 'zachlenuvanje.html', keywords: 'регистрација членство' },
    { title: 'Документи', url: 'dokumenti.html', keywords: 'pdf постапка ценовник закон дозвола' },
    { title: 'Партнери', url: 'partneri.html', keywords: 'производители договорени' },
    { title: 'Ценовник 2026', url: 'assets/docs/MAREKO-CENOVNIK-2026.pdf', keywords: 'ценовник 2026 цена' },
  ];

  const PARTNERS = [
    { name: 'ОЛИМПИА МОТОРС ДОО увоз-извоз Скопје' },
    { name: 'АРДЕ ТРЕЈД ДООЕЛ Скопје' },
    { name: 'ОФИС ЕКСПРЕС ДООЕЛ Кочани' },
    { name: 'ДЕЛУКС-АУТО ДООЕЛ увоз-извоз Куманово' },
    { name: 'ПЕРФЕКТ АУТО ДОО увоз-извоз Крива Паланка' },
    { name: 'МТ МУЛТИМЕДИА НЕТ ДООЕЛ Охрид' },
    { name: 'АУТО ИМПОРТ-СРЛ ДООЕЛ увоз-извоз Крива Паланка' },
    { name: 'АВТО МИРО 1908 ДООЕЛ увоз-извоз Скопје' },
    { name: 'ДОМИНО ТИМ КАР ДООЕЛ увоз-извоз Скопје' },
    { name: 'ТЕРЕН ДООЕЛ увоз-извоз Охрид' },
    { name: 'АУТО КОДЕКС ДООЕЛ Скопје' },
    { name: 'ММС АВТОМОБИЛИ ДООЕЛ увоз-извоз Скопје' },
    { name: 'МАКС АУТО М ДООЕЛ увоз-извоз Крива Паланка' },
    { name: 'БАТЕРФЛАЈ КАРЦ ДООЕЛ увоз-извоз Крива Паланка' },
    { name: 'ПРО АВТО МАРКЕТ ДООЕЛ Скопје' },
    { name: 'МУЛТИ КАРС ДОО Скопје' },
    { name: 'АУТО ИМПОРТ СПА ДОО увоз-извоз Крива Паланка' },
    { name: 'ДФ АВТО ДООЕЛ Скопје' },
    { name: 'АБЦ-БРОТХЕР ДООЕЛ Скопје' },
    { name: 'КАРГОМАКС ДООЕЛ Миладиновци Илинден' },
    { name: 'ЕУРОИМПЕКС ДОО Скопје' },
    { name: 'МИРКАТ ДООЕЛ Скопје' },
  ];

  const DOCUMENTS = [
    {
      file: 'assets/docs/POSTAPKA-MAREKO-2025.pdf',
      title: 'Постапка за избор на правни лица за собирање, транспорт и складирање на отпадни возила за 2025 година',
      type: 'PDF',
    },
    {
      file: 'assets/docs/Mareko-postapka.pdf',
      title: 'Постапка за избор на правни лица за собирање, транспорт и складирање на отпадни возила за 2024 година',
      type: 'PDF',
    },
    {
      file: 'assets/docs/RESENIE-DOZVOLA-MAREKO.pdf',
      title: 'Решение за дозвола за управување со дополнителни текови на отпадни возила',
      type: 'PDF',
    },
    {
      file: 'assets/docs/SLUBEN-VESNIK-NA-RSM-br.-215-od-16.09.2021-2-61.pdf',
      title: 'Службен весник на РСМ бр. 215 од 16.09.2021 – Закон за управување со дополнителни текови на отпад',
      type: 'PDF',
    },
    {
      file: 'assets/docs/SLUBEN-VESNIK-NA-RSM-br.-216-zakon-za-posebni-tekovi-otpad.pdf',
      title: 'Службен весник на РСМ бр. 216 – Закон за посебни текови на отпад',
      type: 'PDF',
    },
    {
      file: 'assets/docs/MAREKO-CENOVNIK-2026.pdf',
      title: 'Ценовник за колективно дејство за 2026 година',
      type: 'PDF',
    },
    {
      file: 'assets/docs/Cenovnik_Mareko.pdf',
      title: 'Ценовник за колективно дејство',
      type: 'PDF',
    },
    {
      file: 'assets/docs/RASKINATI_DOGOVORI_-_2024_GODINA.pdf',
      title: 'Раскинати договори – 2024 година',
      type: 'PDF',
    },
  ];

  const currentPage = document.body.dataset.page || '';

  function buildNavLink(item, isMobile) {
    const active = currentPage === item.id ? ' active' : '';
    return `<a href="${item.href}" class="nav-link${active}">${item.label}</a>`;
  }

  const LOGO_SRC = 'assets/images/mareko-logo.png';

  function buildLogo(className) {
    const cls = className ? ` logo ${className}` : ' logo';
    return `<a href="index.html" class="${cls.trim()}" aria-label="MAREKO – Macedonian Auto Recycling Ecology">
      <img src="${LOGO_SRC}" alt="MAREKO – Macedonian Auto Recycling Ecology" class="logo-img" width="320" height="80">
    </a>`;
  }

  function injectHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    header.innerHTML = `
      <div class="site-top">
        <div class="logo-area">
          ${buildLogo('')}
        </div>
        <div class="main-nav-wrap">
          <div class="main-nav-inner">
            <nav class="main-nav" aria-label="Главна навигација">
              ${NAV_ITEMS.map((item) => buildNavLink(item)).join('')}
            </nav>
            <div class="nav-actions">
              <button class="search-toggle" aria-label="Пребарај" id="search-toggle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </button>
              <button class="menu-toggle" aria-label="Мени" id="menu-toggle" aria-expanded="false">
                <div class="hamburger"><span></span><span></span><span></span></div>
              </button>
            </div>
          </div>
          <nav class="mobile-nav" id="mobile-nav" aria-label="Мобилна навигација">
            ${NAV_ITEMS.map((item) => buildNavLink(item)).join('')}
          </nav>
        </div>
      </div>
    `;

    const searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.id = 'search-overlay';
    searchOverlay.innerHTML = `
      <button class="search-close" id="search-close" aria-label="Затвори">✕</button>
      <input type="search" id="search-input" placeholder="Барај..." autocomplete="off" aria-label="Пребарување">
      <div class="search-results" id="search-results"></div>
    `;
    document.body.appendChild(searchOverlay);
  }

  function injectFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    footer.innerHTML = `
      <div class="footer-accent" aria-hidden="true"></div>
      <div class="footer-inner">
        <nav class="footer-links" aria-label="Подножје навигација">
          ${NAV_ITEMS.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
        </nav>
        <div class="footer-credit">
          <span class="footer-copy">Copyright © ${new Date().getFullYear()}. MAREKO.</span>
          <div class="footer-designed">
            <span class="footer-designed-label">Designed by</span>
            <a href="https://alimi-digital-solutions.vercel.app/" class="alimi-credit-btn" target="_blank" rel="noopener noreferrer">ALIMI DIGITAL</a>
          </div>
        </div>
      </div>
    `;
  }

  function initNavShimmer() {
    const navWrap = document.querySelector('.main-nav-wrap');
    if (!navWrap) return;
    navWrap.classList.add('nav-shimmer');
    setTimeout(() => navWrap.classList.remove('nav-shimmer'), 2000);
  }

  function injectSidebar() {
    const sidebar = document.getElementById('sidebar-nav');
    if (!sidebar) return;
    sidebar.innerHTML = NAV_ITEMS.map((item) => {
      const active = currentPage === item.id ? ' active' : '';
      return `<a href="${item.href}" class="${active.trim()}">${item.label}</a>`;
    }).join('');
  }

  function initMobileNav() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('mobile-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initSearch() {
    const toggle = document.getElementById('search-toggle');
    const overlay = document.getElementById('search-overlay');
    const close = document.getElementById('search-close');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!toggle || !overlay || !input || !results) return;

    function openSearch() {
      overlay.classList.add('open');
      input.focus();
      document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
      overlay.classList.remove('open');
      input.value = '';
      results.innerHTML = '';
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', openSearch);
    close.addEventListener('click', closeSearch);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
    });

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        results.innerHTML = '';
        return;
      }
      const matches = SEARCH_INDEX.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.keywords.toLowerCase().includes(q)
      );
      results.innerHTML = matches.length
        ? matches.map((m) => `<a href="${m.url}">${m.title}</a>`).join('')
        : '<p style="color:var(--text-light);padding:1rem">Нема резултати.</p>';
    });
  }

  function initFontSize() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.font-size-btn');
      if (!btn) return;
      document.querySelectorAll('.font-size-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const sizes = { sm: '14px', md: '16px', lg: '18px' };
      document.documentElement.style.setProperty('--font-base', sizes[btn.dataset.size] || '16px');
    });
  }

  function initSlider() {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const caption = document.getElementById('hero-caption');
    const prev = document.getElementById('slider-prev');
    const next = document.getElementById('slider-next');
    let current = 0;
    let timer;

    function updateCaption(index) {
      if (!caption) return;
      const text = slides[index].dataset.caption || '';
      caption.classList.remove('visible');
      setTimeout(() => {
        caption.textContent = text;
        if (text) caption.classList.add('visible');
      }, 180);
    }

    function goTo(index) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
      updateCaption(current);
    }

    function nextSlide() { goTo(current + 1); }
    function prevSlide() { goTo(current - 1); }

    function startAuto() {
      timer = setInterval(nextSlide, 6000);
    }

    function resetAuto() {
      clearInterval(timer);
      startAuto();
    }

    if (prev) prev.addEventListener('click', () => { prevSlide(); resetAuto(); });
    if (next) next.addEventListener('click', () => { nextSlide(); resetAuto(); });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { goTo(i); resetAuto(); });
    });

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide();
        resetAuto();
      }
    }, { passive: true });

    startAuto();
    updateCaption(0);
  }

  function initFadeUp() {
    const elements = document.querySelectorAll('.fade-up:not(.visible)');
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 0.08, 0.56)}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
  }

  function initPageTransition() {
    document.body.classList.add('page-enter');
    requestAnimationFrame(() => {
      document.body.classList.add('page-enter-active');
    });

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        link.target === '_blank' ||
        href.includes('://') ||
        /\.pdf$/i.test(href)
      ) {
        return;
      }

      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const resolved = new URL(href, window.location.href);
      if (resolved.origin !== window.location.origin) return;

      e.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(() => {
        window.location.href = resolved.pathname + resolved.search + resolved.hash;
      }, 280);
    });
  }

  function extractDocYear(doc) {
    const fromTitle = doc.title.match(/20\d{2}/);
    if (fromTitle) return fromTitle[0];
    const fromFile = doc.file.match(/20\d{2}/);
    return fromFile ? fromFile[0] : null;
  }

  function extractPartnerCity(name) {
    const cities = [
      'Крива Паланка',
      'Миладиновци Илинден',
      'Скопје',
      'Кочани',
      'Куманово',
      'Охрид',
    ];
    for (const city of cities) {
      if (name.includes(city)) return city;
    }
    return null;
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) return;

      const subject = encodeURIComponent('Контакт од mareko.mk – ' + name);
      const body = encodeURIComponent(`Име: ${name}\nЕ-пошта: ${email}\n\n${message}`);
      window.location.href = `mailto:info@mareko.mk?subject=${subject}&body=${body}`;

      const success = document.getElementById('form-success');
      if (success) success.classList.add('show');
    });
  }

  function renderDocuments() {
    const container = document.getElementById('doc-list');
    if (!container) return;

    container.innerHTML = DOCUMENTS.map(
      (doc) => {
        const year = extractDocYear(doc);
        const yearTag = year ? `<span class="doc-year">${year}</span>` : '';
        return `
        <a href="${doc.file}" class="doc-item fade-up" target="_blank" rel="noopener">
          <span class="doc-stripe" aria-hidden="true"></span>
          <div class="doc-icon">${doc.type}</div>
          <div class="doc-info">
            ${yearTag ? `<div class="doc-meta">${yearTag}</div>` : ''}
            <h3>${doc.title}</h3>
          </div>
          <span class="doc-download" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>
          </span>
        </a>
      `;
      }
    ).join('');

    initFadeUp();
  }

  function renderPartners() {
    const container = document.getElementById('partners-list');
    if (!container) return;

    container.innerHTML = `
      <div class="partners-table-wrap fade-up">
        <table class="partners-table">
          <thead>
            <tr>
              <th class="num-col">Бр.</th>
              <th>Договорен производител</th>
            </tr>
          </thead>
          <tbody>
            ${PARTNERS.map(
              (p, i) => {
                const city = extractPartnerCity(p.name);
                const cityChip = city ? `<span class="city-chip">${city}</span>` : '';
                return `
                <tr>
                  <td class="num-col">${i + 1}</td>
                  <td>
                    <div class="partner-name-cell">
                      <span>${p.name}</span>
                      ${cityChip}
                    </div>
                  </td>
                </tr>
              `;
              }
            ).join('')}
          </tbody>
        </table>
      </div>
    `;

    initFadeUp();
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    injectFooter();
    injectSidebar();
    initNavShimmer();
    initPageTransition();
    initMobileNav();
    initSearch();
    initFontSize();
    initSlider();
    initFadeUp();
    initContactForm();
    renderDocuments();
    renderPartners();
  });
})();
