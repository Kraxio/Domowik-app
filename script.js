const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

function setMenu(open) {
  if (!nav || !navToggle) return;
  nav.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('nav-open', open);
  header?.classList.toggle('menu-visible', open);
  const label = navToggle.querySelector('.sr-only');
  if (label) {
    const source = open ? 'Zamknij menu' : 'Otwórz menu';
    label.textContent = window.domowikI18n?.translate(source) || source;
  }
}

navToggle?.addEventListener('click', () => {
  setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});

nav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const gallery = document.querySelector('[data-gallery]');
const slides = gallery ? [...gallery.querySelectorAll('.screen-slide')] : [];
const galleryStatus = document.querySelector('[data-gallery-status]');

function activeSlideIndex() {
  if (!gallery || slides.length === 0) return 0;
  const center = gallery.scrollLeft + gallery.clientWidth / 2;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  slides.forEach((slide, index) => {
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const distance = Math.abs(center - slideCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function updateGalleryStatus() {
  if (galleryStatus && slides.length) {
    galleryStatus.textContent = `${activeSlideIndex() + 1} / ${slides.length}`;
  }
}

function moveGallery(direction) {
  if (!gallery || !slides.length) return;
  const nextIndex = Math.max(0, Math.min(slides.length - 1, activeSlideIndex() + direction));
  const target = slides[nextIndex];
  const targetLeft = target.offsetLeft - (gallery.clientWidth - target.offsetWidth) / 2;

  gallery.scrollTo({
    left: targetLeft,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  });
}

document.querySelector('[data-gallery-prev]')?.addEventListener('click', () => moveGallery(-1));
document.querySelector('[data-gallery-next]')?.addEventListener('click', () => moveGallery(1));

let galleryFrame = 0;
gallery?.addEventListener('scroll', () => {
  cancelAnimationFrame(galleryFrame);
  galleryFrame = requestAnimationFrame(updateGalleryStatus);
}, { passive: true });

gallery?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    moveGallery(-1);
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    moveGallery(1);
  }
});

let dragStartX = 0;
let dragStartScroll = 0;
let isDragging = false;

let dragMoved = 0;
let dragTarget = null;

gallery?.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'touch') return;
  isDragging = true;
  dragMoved = 0;
  dragTarget = event.target;
  dragStartX = event.clientX;
  dragStartScroll = gallery.scrollLeft;
  gallery.classList.add('dragging');
  gallery.setPointerCapture(event.pointerId);
});

gallery?.addEventListener('pointermove', (event) => {
  if (!isDragging) return;
  dragMoved = Math.max(dragMoved, Math.abs(event.clientX - dragStartX));
  gallery.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
});

function stopGalleryDrag(event) {
  if (!isDragging) return;
  isDragging = false;
  gallery?.classList.remove('dragging');
  if (gallery?.hasPointerCapture(event.pointerId)) {
    gallery.releasePointerCapture(event.pointerId);
  }
  // A near-stationary press on a screenshot is a click, not a drag — because the
  // gallery captured the pointer, the image never gets its own click event, so
  // we open the lightbox from here instead.
  if (dragMoved <= 8 && dragTarget) {
    const img = dragTarget.closest && dragTarget.closest('.screen-slide img');
    if (img) gallery.dispatchEvent(new CustomEvent('domowik:zoom', { detail: img }));
  }
}

gallery?.addEventListener('pointerup', stopGalleryDrag);
gallery?.addEventListener('pointercancel', stopGalleryDrag);

/* Auto-przewijanie galerii — powoli sama jedzie w bok, żeby nie trzeba było
   ciągnąć paskiem. Zatrzymuje się, gdy użytkownik wchodzi w interakcję (dotyk,
   przeciąganie, najechanie, strzałki) i wraca po chwili bezczynności. Szanuje
   prefers-reduced-motion i pauzuje, gdy karta jest w tle. */
(function initGalleryAutoScroll() {
  if (!gallery || slides.length < 2) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const STEP_MS = 3500;   // co ile przesunąć o jeden slajd
  const RESUME_MS = 6000; // ile czekać po interakcji, zanim wznowimy
  let timer = 0;
  let resumeTimer = 0;
  let paused = false;

  const advance = () => {
    if (paused || document.hidden) return;
    const i = activeSlideIndex();
    if (i >= slides.length - 1) {
      // zapętlenie — płynny powrót na początek
      gallery.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      moveGallery(1);
    }
  };

  const start = () => { if (!timer) timer = setInterval(advance, STEP_MS); };
  const stop = () => { if (timer) { clearInterval(timer); timer = 0; } };

  // Pauza na interakcję; wznowienie po okresie bezczynności.
  const pause = () => {
    paused = true;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { paused = false; }, RESUME_MS);
  };
  ['pointerdown', 'touchstart', 'wheel', 'mouseenter', 'focusin'].forEach((ev) =>
    gallery.addEventListener(ev, pause, { passive: true }));
  document.querySelector('[data-gallery-prev]')?.addEventListener('click', pause);
  document.querySelector('[data-gallery-next]')?.addEventListener('click', pause);

  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
  start();
})();

updateGalleryStatus();

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

// Hero device screen: cross-fade through the app views every few seconds.
// Pauses on hover and when the tab is hidden; honours reduced-motion.
const heroSlider = document.querySelector('[data-hero-slider]');
if (heroSlider && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const shots = [...heroSlider.querySelectorAll('.hero-shot')];
  if (shots.length > 1) {
    let current = 0;
    let timer = null;
    const advance = () => {
      shots[current].classList.remove('is-active');
      current = (current + 1) % shots.length;
      shots[current].classList.add('is-active');
    };
    const start = () => {
      if (timer === null && !document.hidden) timer = window.setInterval(advance, 4000);
    };
    const stop = () => {
      if (timer !== null) { window.clearInterval(timer); timer = null; }
    };
    heroSlider.addEventListener('mouseenter', stop);
    heroSlider.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    start();
  }
}

// Click-to-load YouTube: nothing loads from Google until the visitor hits play,
// then we swap in a privacy-friendly nocookie iframe that autoplays.
document.querySelectorAll('.video-embed [data-yt-play]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const embed = btn.closest('.video-embed');
    const id = embed?.getAttribute('data-yt');
    if (!id) return;
    const title = embed.getAttribute('data-yt-title') || 'YouTube';
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = title;
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    embed.replaceChildren(iframe);
  });
});

// Gallery lightbox: click a screenshot to see it enlarged. The overlay is built
// once on first use; Escape or a click on the backdrop closes it.
(function initLightbox() {
  const galleryImgs = document.querySelectorAll('.screen-slide img');
  if (!galleryImgs.length) return;

  let overlay, overlayImg, lastFocused;

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.hidden = true;
    const closeLabel = document.documentElement.lang === 'pl' ? 'Zamknij podgląd' : 'Close preview';
    overlay.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="' + closeLabel + '">×</button>' +
      '<img alt="">';
    overlayImg = overlay.querySelector('img');
    overlay.querySelector('.lightbox-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.body.appendChild(overlay);
  }

  function open(src, alt) {
    if (!overlay) buildOverlay();
    lastFocused = document.activeElement;
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.hidden = false;
    document.body.classList.add('nav-open');
    overlay.querySelector('.lightbox-close').focus();
  }

  function close() {
    if (!overlay) return;
    overlay.hidden = true;
    overlayImg.removeAttribute('src');
    document.body.classList.remove('nav-open');
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && !overlay.hidden) close();
  });

  galleryImgs.forEach((img) => {
    const slide = img.closest('.screen-slide');
    if (slide) slide.classList.add('screen-slide-zoomable');
  });

  const galleryEl = document.querySelector('[data-gallery]');
  if (galleryEl) {
    // Mouse: the drag handler captures the pointer, so it tells us when a press
    // was actually a click via this custom event.
    galleryEl.addEventListener('domowik:zoom', (e) => {
      const img = e.detail;
      if (img) open(img.currentSrc || img.src, img.alt);
    });
    // Touch (and any case with no pointer capture): a normal click still fires.
    galleryEl.addEventListener('click', (e) => {
      if (galleryEl.classList.contains('dragging')) return;
      const img = e.target.closest('.screen-slide img');
      if (img) open(img.currentSrc || img.src, img.alt);
    });
  }
})();

/* Rotacja klatek w galerii — niektóre moduły mają kilka widoków (np. katalog:
   lista i szczegół; finanse: konto, kategorie, historia). Slajd z atrybutem
   data-frames="url1|url2|..." (i opcjonalnie data-alts="alt1|alt2|...") cyklicznie
   przechodzi między klatkami z płynnym cross-fade. Szanuje prefers-reduced-motion
   i pauzuje, gdy karta jest w tle. */
(function initFrameRotation() {
  const imgs = [...document.querySelectorAll('img[data-frames]')]
    .map((img) => {
      const frames = (img.getAttribute('data-frames') || '').split('|').map((s) => s.trim()).filter(Boolean);
      const alts = (img.getAttribute('data-alts') || '').split('|').map((s) => s.trim());
      return { img, frames, alts, i: 0 };
    })
    .filter((r) => r.frames.length > 1);
  if (!imgs.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Wstępne wczytanie kolejnych klatek, żeby przejście było płynne (bez migotania).
  for (const r of imgs) {
    for (const url of r.frames.slice(1)) { const p = new Image(); p.src = url; }
  }

  const INTERVAL = 4200;
  let timer = 0;

  const step = () => {
    for (const r of imgs) {
      r.i = (r.i + 1) % r.frames.length;
      const img = r.img;
      img.style.transition = 'opacity .5s ease';
      img.style.opacity = '0';
      const next = r.frames[r.i];
      const nextAlt = r.alts[r.i] || img.alt;
      const swap = () => {
        img.src = next;
        if (nextAlt) img.alt = nextAlt;
        img.style.opacity = '1';
        img.removeEventListener('transitionend', swap);
      };
      // Podmiana po wyblaknięciu; fallback czasowy gdyby transitionend nie strzelił.
      let done = false;
      const guard = () => { if (done) return; done = true; swap(); };
      img.addEventListener('transitionend', function once(e) {
        if (e.propertyName !== 'opacity') return;
        img.removeEventListener('transitionend', once);
        guard();
      });
      setTimeout(guard, 650);
    }
  };

  const start = () => { if (!timer) timer = setInterval(step, INTERVAL); };
  const stop = () => { if (timer) { clearInterval(timer); timer = 0; } };

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });
  start();
})();

/* Mobilny sticky pasek „Pobierz" — pojawia się, gdy hero wyjedzie z widoku
   (użytkownik scrolluje w dół), znika, gdy hero znów jest na ekranie. Dzięki
   temu główne CTA jest zawsze w zasięgu kciuka bez dublowania go w hero. */
(function initMobileCta() {
  const bar = document.querySelector('[data-mobile-cta]');
  const hero = document.querySelector('.hero');
  if (!bar || !hero || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    // hero widoczny (choć w części) → chowamy pasek; hero poza ekranem → pokazujemy.
    const heroVisible = entries.some((e) => e.isIntersecting);
    bar.classList.toggle('is-visible', !heroVisible);
  }, { threshold: 0, rootMargin: '-60px 0px 0px 0px' });
  io.observe(hero);
})();
