// theme.js

const toggleBtn = document.getElementById('theme-toggle');

// Initiales Laden des Themes
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    if (toggleBtn) toggleBtn.textContent = '🌙';
  }
});

// Toggle-Funktion für den Button
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '🌙';
    }
  });
}
