/* ── Countdown Timer ── */
function updateCountdown() {
  const target = new Date('2038-01-19T03:14:08Z');
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) {
    document.getElementById('countdown').textContent = 'OVERFLOW HAS OCCURRED';
    return;
  }
  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  const secs  = Math.floor((diff % 60000) / 1000);
  document.getElementById('countdown').textContent =
    `${days}d ${String(hours).padStart(2,'0')}h ${String(mins).padStart(2,'0')}m ${String(secs).padStart(2,'0')}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ── Scroll Reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));