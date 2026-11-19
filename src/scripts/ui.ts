// Tiny progressive-enhancement layer shared by every concept.
const $$ = <T extends HTMLElement = HTMLElement>(s: string, r: ParentNode = document): T[] =>
  Array.from(r.querySelectorAll<T>(s));

// --- Mobile navigation (overlay / sheet / dropdown — markup decides the look) ---
$$('[data-nav-toggle]').forEach((btn) => {
  const panel = document.getElementById(btn.getAttribute('aria-controls') || '');
  if (!panel) return;
  const labelOpen = btn.dataset.labelOpen || '';
  const labelClose = btn.dataset.labelClose || '';
  const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
  const set = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    if (labelOpen) btn.setAttribute('aria-label', open ? labelClose : labelOpen);
    panel.toggleAttribute('data-open', open);
    document.documentElement.toggleAttribute('data-nav-open', open);
    if (open) panel.querySelector<HTMLElement>('a,button')?.focus();
  };
  btn.addEventListener('click', () => set(!isOpen()));
  panel.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('a') || t.closest('[data-nav-close]')) set(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) { set(false); btn.focus(); }
    if (e.key === 'Tab' && isOpen()) {
      // keep focus inside the open panel (+ the toggle)
      const f = [btn, ...$$('a,button', panel)].filter((x) => x.offsetParent !== null);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (m) => m.matches && set(false));
});

// --- Header state on scroll ---
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const on = () => header.toggleAttribute('data-scrolled', window.scrollY > 24);
  on();
  window.addEventListener('scroll', on, { passive: true });
}

// --- Reveal on scroll ---
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const rev = $$('[data-reveal]');
if (reduce || !('IntersectionObserver' in window)) rev.forEach((el) => el.classList.add('is-in'));
else {
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }),
    { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
  );
  rev.forEach((el) => io.observe(el));
}

// --- Menu category filter ---
$$('[data-menu]').forEach((root) => {
  const tabs = $$<HTMLButtonElement>('[data-filter]', root);
  const groups = $$('[data-cat]', root);
  tabs.forEach((t) => t.addEventListener('click', () => {
    const id = t.dataset.filter!;
    tabs.forEach((x) => x.setAttribute('aria-pressed', String(x === t)));
    groups.forEach((g) => (g.hidden = id !== 'all' && g.dataset.cat !== id));
  }));
});

// --- Click-to-load Google Maps (privacy + performance) ---
$$<HTMLButtonElement>('[data-map-load]').forEach((b) => b.addEventListener('click', () => {
  const f = document.createElement('iframe');
  f.src = b.dataset.mapLoad!;
  f.title = b.dataset.title || 'Map';
  f.loading = 'lazy';
  f.referrerPolicy = 'no-referrer-when-downgrade';
  f.setAttribute('allowfullscreen', '');
  b.replaceWith(f);
}));

// --- Lightbox ---
const dlg = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');
if (dlg) {
  const img = dlg.querySelector('img')!;
  const cap = dlg.querySelector('figcaption')!;
  $$<HTMLAnchorElement>('[data-lightbox]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    img.src = a.href;
    img.alt = a.dataset.alt || '';
    cap.textContent = a.dataset.alt || '';
    dlg.showModal();
  }));
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg || (e.target as HTMLElement).closest('[data-close]')) dlg.close();
  });
}
