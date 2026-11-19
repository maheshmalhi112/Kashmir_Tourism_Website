/* Discover Kashmir – behaviour: mobile menu and destination search/filter.
   Plain JavaScript, no dependencies. */
document.documentElement.classList.remove('no-js');

/* ---------- Mobile menu ---------- */
(function () {
  const toggle = document.querySelector('[data-menu]');
  const links = document.querySelector('[data-links]');
  if (!toggle || !links) return;

  function setOpen(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

  // Escape closes the menu and returns focus to the button
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && links.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset when the layout switches back to the inline navigation
  window.matchMedia('(min-width: 701px)').addEventListener('change', e => { if (e.matches) setOpen(false); });
})();

/* ---------- Destination search and category filter ---------- */
(function () {
  const filters = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  const search = document.querySelector('[data-search]');
  const message = document.querySelector('[data-results]');
  if (!cards.length) return;

  function update() {
    const selected = document.querySelector('[data-filter][aria-pressed="true"]')?.dataset.filter || 'all';
    const query = (search?.value || '').trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const matchesCategory = selected === 'all' || card.dataset.category === selected;
      const matchesText = card.textContent.toLowerCase().includes(query);
      card.hidden = !(matchesCategory && matchesText);
      if (!card.hidden) visible++;
    });

    if (message) {
      message.textContent = visible === 0
        ? 'No destinations match your search.'
        : `${visible} ${visible === 1 ? 'destination' : 'destinations'} shown`;
    }
  }

  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(other => other.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
    update();
  }));
  search?.addEventListener('input', update);
  update();
})();
