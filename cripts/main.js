const filterButtons = document.querySelectorAll('[data-filter]');
const dessertCards = document.querySelectorAll('.dessert-card');
const status = document.querySelector('.selection-status');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const filter = button.dataset.filter;
    dessertCards.forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'todos' && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll('.choose-button').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.dessert-card');
    card.classList.toggle('is-selected');
    const selectedCount = document.querySelectorAll('.dessert-card.is-selected').length;
    status.textContent = `${selectedCount} ${selectedCount === 1 ? 'postre elegido' : 'postres elegidos'}`;
    button.setAttribute('aria-pressed', card.classList.contains('is-selected'));
  });
});

document.querySelectorAll('[data-scroll-to]').forEach((button) => {
  button.addEventListener('click', () => document.querySelector(button.dataset.scrollTo).scrollIntoView({ behavior: 'smooth' }));
});
