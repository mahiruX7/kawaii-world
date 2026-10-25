const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.anime-card')];
const filters = [...document.querySelectorAll('.filter')];
const emptyState = document.getElementById('emptyState');
let activeFilter = 'all';

function updateAnime() {
  const query = searchInput.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const tags = card.dataset.tags.split(' ');
    const matchesSearch = name.includes(query);
    const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter);
    card.hidden = !(matchesSearch && matchesFilter);
    if (!card.hidden) shown++;
  });
  emptyState.hidden = shown !== 0;
}
searchInput.addEventListener('input', updateAnime);
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  updateAnime();
}));
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
