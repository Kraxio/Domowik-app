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

gallery?.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'touch') return;
  isDragging = true;
  dragStartX = event.clientX;
  dragStartScroll = gallery.scrollLeft;
  gallery.classList.add('dragging');
  gallery.setPointerCapture(event.pointerId);
});

gallery?.addEventListener('pointermove', (event) => {
  if (!isDragging) return;
  gallery.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
});

function stopGalleryDrag(event) {
  if (!isDragging) return;
  isDragging = false;
  gallery?.classList.remove('dragging');
  if (gallery?.hasPointerCapture(event.pointerId)) {
    gallery.releasePointerCapture(event.pointerId);
  }
}

gallery?.addEventListener('pointerup', stopGalleryDrag);
gallery?.addEventListener('pointercancel', stopGalleryDrag);

updateGalleryStatus();

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
