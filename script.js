const featuresUp = document.querySelectorAll('.aos-up');
const topChoiceUp = document.querySelectorAll('.aos-menu');
const avatarZoom = document.querySelectorAll('.aos-avatar');

featuresUp.forEach((ftr, i) => {
  ftr.dataset.aos = 'fade-up';
  ftr.dataset.aosDelay = i * 150;
  ftr.dataset.aosDuration = 1200;
});
topChoiceUp.forEach((card, i) => {
  card.dataset.aos = 'fade-up-left';
  card.dataset.aosDelay = i * 150;
  card.dataset.aosDuration = 1200;
});
avatarZoom.forEach((avatar, i) => {
  avatar.dataset.aos = 'zoom-out-up';
  avatar.dataset.aosDelay = i * 150;
  avatar.dataset.aosDuration = 1200;
});

const img = window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.img-1', {
    duration: 4,
    rotation: 90,
    delay: 1,
    x: 600,
    ease: 'sine',
  });
});
