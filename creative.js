// Parallax Hero Effect
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const hero = document.querySelector('.creative-hero');
  const parallaxBg = document.querySelector('.parallax-bg');
  const logo = document.querySelector('.hero-logo');
  const title = document.querySelector('.hero-title');
  if (hero && parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
  if (logo) {
    logo.style.transform = `translateY(${scrollY * 0.15}px) scale(${1 - scrollY/2000})`;
  }
  if (title) {
    title.style.transform = `translateY(${scrollY * 0.12}px)`;
  }
});

// Projects Carousel
(function() {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.carousel-card');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let current = 0;
  function scrollToCard(idx) {
    if (!track || !cards[idx]) return;
    cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }
  if (prevBtn) prevBtn.addEventListener('click', () => {
    current = Math.max(0, current - 1);
    scrollToCard(current);
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    current = Math.min(cards.length - 1, current + 1);
    scrollToCard(current);
  });
  // Optional: update current on manual scroll
  if (track) {
    track.addEventListener('scroll', () => {
      let minDist = Infinity, idx = 0;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.left - track.getBoundingClientRect().left);
        if (dist < minDist) { minDist = dist; idx = i; }
      });
      current = idx;
    });
  }
})();

// Floating/Orbiting Badges (Skills/Tools)
(function() {
  const badges = document.querySelectorAll('.skills-badges-orbit .badge');
  badges.forEach((badge, i) => {
    badge.style.setProperty('--i', i);
    // Optionally, add a random animation delay for more organic movement
    badge.style.animationDelay = `${(i % 8) * 0.18 + Math.random() * 0.2}s`;
  });
})();

// Back to Top Button
(function() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
  });
  btn.style.display = 'none';
})();

// Animate Scroll Down Indicator
(function() {
  const indicator = document.querySelector('.scroll-down-indicator');
  if (!indicator) return;
  indicator.addEventListener('click', e => {
    e.preventDefault();
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  });
})(); 